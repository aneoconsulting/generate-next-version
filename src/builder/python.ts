import type { GitCommit, SemverBumpType } from 'changelogen'
import type { ResolvedGenerateNextVersionConfig } from '../types'

export async function pythonBuilder(semver: SemverBumpType, commits: GitCommit[], config: ResolvedGenerateNextVersionConfig) {
  throw new Error('Not implemented')
}
