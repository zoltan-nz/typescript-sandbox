# TypeScript SandBox

* [Experiment 1 - Streaming: Reading CSV file, transforming records to JavaScript Objects](src/streamer-experiment/README.md)

## NPM commands

| Command | Description |
| --- | --- |
|`npm run clean` | Remove `./dist` folder |
|`npm run prettier` | Run `prettier` |
|`npm run lint` | Run `prettier` and `ts-lint` sequentially |
| `npm run build` | Run `clean` and `lint` parallel and run `tsc` after |
| `npm run test` | Run `jest` |
| `npm run watch:build` | Watch any `*.ts` file change and run `tsc` |
| `npm run watch:prettier` | Watch any `*.ts` file change and run `prettier` |
| `npm run watch:lint` | Watch any `*.ts` file change and run `tslint` with fix` |
| `npm run watch:test` | Run `jest` with `--watchAll` |
| `npm run dev` | Run `watch:build` and `watch:test` parallel |

