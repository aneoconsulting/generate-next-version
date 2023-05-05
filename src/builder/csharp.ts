import type { SemverBumpType } from 'changelogen'
import type { ResolvedGenerateNextVersionConfig } from '../types'

export async function csharpBuilder(semver: SemverBumpType, config: ResolvedGenerateNextVersionConfig) {
  return 'csharp'
}
