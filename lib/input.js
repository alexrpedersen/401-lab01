'use strict';

const minimist = require('minimist');
const Validator = require('./validator');



class Input {

  constructor(){
    const args = minimist(process.argv.slice(2));
    this.command = this.parse(args);
  }

  parse(args){

    let flagTranslator = {
      a: 'add',
      add: 'add',
      l: 'list',
      list: 'list',
      d: 'del',
      delete: 'del',
    };

    let arg = Object.keys(args).filter(banana => flagTranslator[banana])[0];

    return {
      action: flagTranslator[arg],
      payload: args[arg],
    };
  };

  valid(){
    return !!(this.command.action && this.command.payload);
  }
}

module.exports = Input;