import type { SemverBumpType } from 'changelogen'
import { builders } from './languages'
import type { ResolvedGenerateNextVersionConfig } from './types'

export async function generateVersion(semver: SemverBumpType, config: ResolvedGenerateNextVersionConfig) {
  const builder = builders[config.language]

  const version = await builder(semver, config)

  return version
}
