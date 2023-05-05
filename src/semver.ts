import type { SemverBumpType } from 'changelogen'
import { determineSemverChange, getGitDiff, parseCommits } from 'changelogen'
import type { ResolvedGenerateNextVersionConfig } from './types'

export async function getBumpType(config: ResolvedGenerateNextVersionConfig): Promise<SemverBumpType> {
  const rawCommits = await getGitDiff(config.from, config.to)

  const commits = parseCommits(rawCommits, config).filter(c =>
    config.types[c.type]
        && !(c.type === 'chore' && c.scope === 'deps' && !c.isBreaking))

  const bumpType = determineSemverChange(commits, config)

  return bumpType || 'patch'
}
