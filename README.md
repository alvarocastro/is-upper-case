# is-upper-case
[![NPM](https://img.shields.io/npm/v/@alvarocastro/is-upper-case.svg)](https://www.npmjs.com/package/@alvarocastro/is-upper-case)
[![Build Status](https://travis-ci.com/alvarocastro/is-upper-case.svg?branch=master)](https://travis-ci.com/alvarocastro/is-upper-case)
[![codebeat badge](https://codebeat.co/badges/fe722930-619a-42b9-9a83-ce23e8dee0f5)](https://codebeat.co/projects/github-com-alvarocastro-is-upper-case-master)
[![Coverage Status](https://coveralls.io/repos/github/alvarocastro/is-upper-case/badge.svg?branch=master)](https://coveralls.io/github/alvarocastro/is-upper-case?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Simple tool to check if a string is uppercase.

- [Install](#install)
- [Usage](#usage)

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
