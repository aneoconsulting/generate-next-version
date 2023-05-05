# generate-next-version

[![NPM version](https://img.shields.io/npm/v/@aneoconsultingfr/generate-next-version?color=fe5001&label=)](https://www.npmjs.com/package/@aneoconsultingfr/generate-next-version)

> Generate next version based on git history, use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Feature

- Generate version on edge
- Generate version on branch
- Generate version on release branch

## Actions Usage

```yml
# .github/workflows/release.yml

name: Release

permissions:
  contents: write

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v3
        with:
          node-version: 16.x

      - run: echo "VERSION=$(npx @aneoconsultingfr/generate-next-version@latest)" >> $GITHUB_ENV
```

It will be trigged whenever you push a tag to GitHub that starts with `v`.

## CLI Usage

```bash
npx @aneoconsultingfr/generate-next-version@latest [...args]
```

**Arguments**

- `--edge` - Generate version on edge
- `--base` - Base branch to compare with
- `--language` - Language of the project in order to generate next semver
- `--help` - Display help message

## Preview Locally

```bash
npx @aneoconsultingfr/generate-next-version@latest
```

## License

[MIT](./LICENSE) License © 2023 [Aneo](https://github.com/aneoconsulting)
