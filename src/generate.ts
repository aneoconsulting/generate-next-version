import { type SemverBumpType, getGitDiff, parseCommits } from 'changelogen'
import { builders } from './languages'
import type { ResolvedGenerateNextVersionConfig } from './types'

export async function generateVersion(semver: SemverBumpType, config: ResolvedGenerateNextVersionConfig) {
  const builder = builders[config.language]

  const rawCommits = await getGitDiff(config.from, config.to)
  const commits = parseCommits(rawCommits, config)

  const version = await builder(semver, commits, config)

  return version
}
