import { type SemverBumpType, getGitDiff, parseCommits } from 'changelogen'
import type { ResolvedGenerateNextVersionConfig } from '../types'
import { inc } from './_utils'

export async function javascriptBuilder(bumpType: SemverBumpType, config: ResolvedGenerateNextVersionConfig) {
  const version = inc(bumpType, config)

  const rawCommits = await getGitDiff(config.from, config.to)

  console.log(rawCommits)
  const commits = parseCommits(rawCommits, config)
  console.log(commits)

  if (config.edge)
    return `${version}-edge.${commits.length}.${commits[0].shortHash}`

  return version as string
}
