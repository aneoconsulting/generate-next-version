import type { ChangelogConfig, SemverBumpType } from 'changelogen'
import type { languages } from './languages'

export type ChangelogenOptions = ChangelogConfig

export type Language = typeof languages[number]

export interface GenerateNextVersionConfig extends Partial<ChangelogenOptions> {
  language: Language
  edge: boolean
}

export type ResolvedGenerateNextVersionConfig = Required<GenerateNextVersionConfig>

export type Generator = (bumpType: SemverBumpType, config: ResolvedGenerateNextVersionConfig) => Promise<string>
