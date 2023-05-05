import type { GitCommit, SemverBumpType } from 'changelogen'
import type { Builder, ResolvedGenerateNextVersionConfig } from '../types'

export const pythonBuilder: Builder = async function (semver: SemverBumpType, commits: GitCommit[], config: ResolvedGenerateNextVersionConfig) {
  throw new Error('Not implemented')
}
