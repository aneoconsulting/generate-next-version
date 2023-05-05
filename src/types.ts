import type { ChangelogConfig, GitCommit, SemverBumpType } from 'changelogen'
import type { languages } from './languages'

export type ChangelogenOptions = ChangelogConfig

export type Language = typeof languages[number]

export interface GenerateNextVersionConfig extends Partial<ChangelogenOptions> {
  language: Language
  edge: boolean
  base: string
}

export type ResolvedGenerateNextVersionConfig = Required<GenerateNextVersionConfig>

export type Generator = (bumpType: SemverBumpType, commits: GitCommit[], config: ResolvedGenerateNextVersionConfig) => Promise<string>
