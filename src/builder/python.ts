import type { SemverBumpType } from 'changelogen'
import type { ResolvedGenerateNextVersionConfig } from '../types'

export async function pythonBuilder(semver: SemverBumpType, config: ResolvedGenerateNextVersionConfig) {
  return 'python'
}
