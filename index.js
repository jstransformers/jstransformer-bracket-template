'use strict'

const bracket = require('bracket-template')

exports.name = 'bracket-template'
exports.inputFormats = ['bracket-template', 'bracket', 'brkt']
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  return bracket.default.compile(str, options)
}
