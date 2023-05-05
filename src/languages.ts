import { csharpBuilder } from './builder/csharp'
import { javascriptBuilder } from './builder/javascript'
import { pythonBuilder } from './builder/python'
import type { Builder, Language } from './types'

export const languages = ['javascript', 'csharp', 'python'] as const

export const builders: Record<Language, Builder> = {
  javascript: javascriptBuilder,
  csharp: csharpBuilder,
  python: pythonBuilder,
}
