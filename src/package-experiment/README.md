# Experiment #3 - Building Universal Packages

How we can create a universal package, which support different commonly used format:

- CommonJS
- UMD (CommonJS, AMD, iife)
- AMD
- pkg.module (ES2015)

## Useful articles

- https://github.com/rollup/rollup/wiki/pkg.module
- http://2ality.com/2017/04/setting-up-multi-platform-packages.html
- https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html
- https://www.typescriptlang.org/docs/handbook/modules.html

## package.json entries

```
{
  "main": "dist/my-package.js", // commonjs format - typescript
  "module": dist/my-package.esm.js", // ES2015 format - typescript
  "browser": dist/my-package.umd.js" // UMD format - rollup
  "types": "dist/my-package.d.ts", // typescript
}
```

## Exported code

- [`age-calculator.ts`](./age-calculator.ts)
- [`birthday-validator.ts`](./birthday-validator.ts)

## Exported formats

### TypeScript build

Setup `tsconfig.json` property to export NodeJS compatible package: `"module": "commonjs"`. Webpack and Node.js can use this format.

### AMD format using typescript

Add custom `tsconfig.json` to project folder:

```
{
  "extends": "../../tsconfig.json",
  "include": ["./**/*"],
  "compilerOptions": {
    "module": "amd",
    "outFile": "../../dist/package-experiment/age-calculator.amd.js"
  }
}
```

Option `module` have to be `amd`, and `outFile` determines the bundled filename.

### Create UMD bundles with `rollup`

Useful repository: https://github.com/alexjoverm/typescript-library-starter

Adding the following packages to `package.json`:

```
- rollup
- rollup-plugin-commonjs
- rollup-plugin-json
- rollup-plugin-node-resolve
- rollup-plugin-sourcemaps
- rollup-plugin-typescript2
```
 

## Validating package formats

Test environments are installed in [`package-experiment-test`](../../package-experiment-test) folder.

### React App (webpack)

* Using `commonjs`

### Classic website (window.global)

### Ember.js (AMD)

### Standard Node.js (CommonJS)
