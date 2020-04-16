'use strict';

const isUrl = require('is-url');
const minimist = require('minimist');
const Validator = require('./validator')

 class Input {

    constructor() {
        let args = minimist(process.argv.slice(2));
        this.method = this.getMethod(args.m);
    }

    getMethod(method = '') {
        let validMethod = add;
        return validMethod.test(method) ? method : '';
    }

    getNote(note = undefined) {
        try {
            return JSON.parse(note);
        }
        catch (e) {
            return body;
        }
    }

    valid() {
        const schema = {
          url: { type: 'string', required: true },
          method: { type: 'string', required: true },
        }
        const validator = new Validator(schema);
        return validator.isValid(this);
      }

 }

 module.exports = Input;