# Experiment #3 - Building Universal Packages

How we can create a universal package, which support different commonly used format:

- CommonJS
- UMD
- AMD
- pkg.module

## Useful articles

- https://github.com/rollup/rollup/wiki/pkg.module
- http://2ality.com/2017/04/setting-up-multi-platform-packages.html
- https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html

## package.json entries

```
{
  "main": "dist/my-package.umd.js",
  "module": dist/my-package.esm.js",
  "browser": dist/my-package.umd.js"
  "types": "dist/my-package.d.ts",
}
```

## Exported code

- [`age-calculator.ts`](./age-calculator.ts)
- [`birthday-validator.ts`](./birthday-validator.ts)

## Validating package formats

Test environments are installed in [`package-experiment-test`](../../package-experiment-test) folder.

### React App (webpack)

### Classic website (window.global)

### Ember.js (AMD)

### Standard Node.js (CommonJS)
