import type { ChangelogConfig, RawGitCommit, SemverBumpType } from 'changelogen'
import type { languages } from './languages'

export type ChangelogenOptions = ChangelogConfig

export type Language = typeof languages[number]

export interface GenerateNextVersionConfig extends Partial<ChangelogenOptions> {
  language: Language
  edge: boolean
  base: string
}

export type ResolvedGenerateNextVersionConfig = Required<GenerateNextVersionConfig>

export type Builder = (bumpType: SemverBumpType, commits: RawGitCommit[], config: ResolvedGenerateNextVersionConfig) => Promise<string>
