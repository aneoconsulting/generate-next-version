import cac from 'cac'
import { consola } from 'consola'
import { version } from '../package.json'
import { buildVersion, getBumpType, languages, resolveConfig } from './index'

const cli = cac('generate-next-version')

cli.version(version)
  .option('--language <language>', `Language of the project in order to generate next semver (${languages.join(', ')})`)
  .option('--base <branch>', 'Base branch to compare from')
  .option('-e, --edge', 'Generate next semver for edge release')
  .help()

cli.command('')
  .action(async (args) => {
    try {
      const config = await resolveConfig(args)

      const bumpType = await getBumpType(config)
      const version = await buildVersion(bumpType, config)

      // Write version to stdout
      process.stdout.write(version)
    }
    catch (error) {
      consola.error(error)
      process.exit(1)
    }
  })

cli.parse()
