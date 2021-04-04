## optimove-websdk

> Optimove WebSDK for humans

[![npm](https://img.shields.io/npm/v/optimove-websdk/latest.svg)](https://www.npmjs.com/package/optimove-websdk)
[![min.gz size](https://badgen.net/bundlephobia/minzip/optimove-websdk)](https://bundlephobia.com/result?p=optimove-websdk)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Why

> Because Optimove is complicated™

# Features

- Promisified API
- Reasonable defaults
- Typescript types built-in
- Bundled, so e.g. ad-blockers won't block it just by url name
- Loads config with hard-coded `https://` schema, which allows it to work under e.g `ionic://`,
  `capacitor://`, `file://`, etc schemas
- Allows to not care about `optimoveSDK.initialize`, since it's called lazily on first usage.
- Allows to (hopefully) not care about "is it loaded yet?" problem
- ~~Zero dependencies~~ (1 small tree-shakeable dependency), exports ESM / 🌲-shakeable
- Automatically handles `snakeToCamel`, `camelToSnake` case conversions when reporting events and
  custom properties

# Usage

```typescript
import { OptimoveWebSK } from 'optimove-websdk'

const sdk = new OptimoveWebSDK({
  tenantToken: 'lalala',
  configVersion: '1.0.0',
})

// Will lazily initialize SDK on the first call (hence the `await`)
await sdk.registerUser('someCustomerId', 'some@email.com')

// Skip await freely, if it's more convenient
void sdk.registerUser('someCustomerId', 'some@email.com')

// Low-level API is available via `window.optimoveSDK` too (Window interface is augmented with its types already)
window.optimoveSDK.API.registerUser('someCustomerId', 'some@email.com')
```
