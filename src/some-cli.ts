import { Command, flags } from '@oclif/command';

class SomeCli extends Command {
  public static description = 'describe the command here';

  public static flags = {

    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),

    help: flags.help({ char: 'h' }),

    // flag with a value (-n, --name=VALUE)
    name: flags.string({
      char: 'n',
      description: 'name to print',
    }),

    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  };

  public static args = [{ name: 'file' }];

  public async run(): Promise<void> {
    const { args, flags } = this.parse(SomeCli);

    const name = flags.name || 'world';
    this.log(`hello ${name} from ./src/index.ts`);
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}

export = SomeCli;
