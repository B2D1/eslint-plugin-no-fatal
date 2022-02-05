# eslint-plugin-no-fatal

A series of mandatory measures to prevent low-level accidents

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-fatal`:

```sh
npm install eslint-plugin-no-fatal --save-dev
```

## Usage

Add `no-fatal` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["no-fatal"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "no-fatal/rule-name": 2
  }
}
```

## Supported Rules

- force-optional-chaining
