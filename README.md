# jstransformer-bracket-template

[Bracket-Template](https://github.com/danlevan/bracket-template) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-bracket-template/master.svg)](https://travis-ci.org/jstransformers/jstransformer-bracket-template)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-bracket-template/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-bracket-template)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-bracket-template/master.svg)](http://david-dm.org/jstransformers/jstransformer-bracket-template)

[![NPM version](https://img.shields.io/npm/v/jstransformer-bracket-template.svg)](https://www.npmjs.org/package/jstransformer-bracket-template)

## Installation

    npm install jstransformer-bracket-template

## API

```js
var bracket = require('jstransformer')(require('jstransformer-bracket-template'));

bracket.render('Hello [[= model.name ]]!', {name: 'World'}).body
//=> 'Hello, World!'
```

## License

MIT
