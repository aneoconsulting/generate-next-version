import type { RawGitCommit, SemverBumpType } from 'changelogen'
import type { Builder, ResolvedGenerateNextVersionConfig } from '../types'
import { inc, useSlugify } from './_utils'

export const csharpBuilder: Builder = async function (bumpType: SemverBumpType, commits: RawGitCommit[], config: ResolvedGenerateNextVersionConfig) {
  const version = inc(bumpType, config)

  if (config.to !== config.base)
    return `${version}-${useSlugify(config.to)}.${commits.length}.${commits[0].shortHash}`

  if (config.edge && commits.length > 0)
    return `${version}-edge.${commits.length}.${commits[0].shortHash}`

  return version as string
}
