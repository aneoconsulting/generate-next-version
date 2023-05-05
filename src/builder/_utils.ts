import slugify from 'slugify'
import { inc as incSemver } from 'semver'
import type { SemverBumpType } from 'changelogen'
import type { ResolvedGenerateNextVersionConfig } from '../types'

export function useSlugify(str: string) {
  return slugify(str, {
    replacement: '',
    remove: /[-]/g,
    lower: true,
    strict: true,
    locale: 'en',
    trim: true,
  })
}

export function inc(bumpType: SemverBumpType, config: ResolvedGenerateNextVersionConfig) {
  const version = incSemver(config.from || '0.0.0', bumpType)

  return version
}
