# is-upper-case

[![NPM](https://img.shields.io/npm/v/@alvarocastro/is-upper-case)](https://www.npmjs.com/package/@alvarocastro/is-upper-case)
[![Build status](https://img.shields.io/github/workflow/status/alvarocastro/is-upper-case/build)](https://github.com/alvarocastro/is-upper-case/actions?query=workflow%3Abuild)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability/alvarocastro/is-upper-case)](https://codeclimate.com/github/alvarocastro/is-upper-case/maintainability)
[![Coverage status](https://img.shields.io/coveralls/github/alvarocastro/is-upper-case)](https://coveralls.io/github/alvarocastro/is-upper-case?branch=master)
[![Bundle size](https://img.shields.io/bundlephobia/min/@alvarocastro/is-upper-case)](https://bundlephobia.com/result?p=@alvarocastro/is-upper-case)
[![Code style: XO](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Release: Semantic](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Simple tool to check if a string is uppercase.

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Support](#support)

## Install

```bash
npm install @alvarocastro/is-upper-case
```

## Usage

```js
const isUpperCase = require('@alvarocastro/is-upper-case');

isUpperCase('SOMETHING');
// => true
isUpperCase('something else');
// => false
isUpperCase('Another stuff');
// => false
```

### isUpperCase(text)

#### text

Type: `string`

String to test.

## Contributing

Contributions are always welcome! Please run `npm test` beforehand to ensure everything is ok.

## Support

If you use this package please consider starring it :)
