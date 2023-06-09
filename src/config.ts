import { consola } from 'consola'
import { getCurrentGitBranch } from 'changelogen'
import { getFirstGitCommit, getLastGitTag } from 'changelogithub'
import type { GenerateNextVersionConfig, ResolvedGenerateNextVersionConfig } from './types'
import { languages } from './languages'

export function defineConfig(config: GenerateNextVersionConfig): GenerateNextVersionConfig {
  return config
}

const defaultConfig: GenerateNextVersionConfig = {
  scopeMap: {},
  types: {
    feat: { title: '🚀 Enhancements', semver: 'minor' },
    perf: { title: '🔥 Performance', semver: 'patch' },
    fix: { title: '🩹 Fixes', semver: 'patch' },
    refactor: { title: '💅 Refactors', semver: 'patch' },
    docs: { title: '📖 Documentation', semver: 'patch' },
    build: { title: '📦 Build', semver: 'patch' },
    types: { title: '🌊 Types', semver: 'patch' },
  },
  language: 'javascript',
  edge: false,
  base: 'main',
}

export async function resolveConfig(options: GenerateNextVersionConfig) {
  const { loadConfig } = await import('c12')
  const config = await loadConfig<GenerateNextVersionConfig>({
    name: 'generate-next-version',
    defaults: defaultConfig,
    overrides: options,
  }).then(r => r.config || defaultConfig)

  if (!config.language) {
    consola.fatal('Language is required')
    process.exit(1)
  }

  if (config.language && !languages.includes(config.language)) {
    consola.fatal(`Language must be one of ${languages.join(', ')}`)
    process.exit(1)
  }

  config.from = config.from || await getLastGitTag()
  config.to = config.to || await getCurrentGitBranch()

  if (config.to === config.from)
    config.from = await getLastGitTag(-1) || await getFirstGitCommit()

  return config as ResolvedGenerateNextVersionConfig
}
