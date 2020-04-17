'use strict';

const minimist = require('minimist');
const Validator = require('./validator');
const mongoose = require('mongoose');
const MONGODB_URI = "mongodb://test:password@localhost/noterepo"


class Note {

  constructor(options){
    this.action = options.command.action;
    this.payload = { payload: options.command.payload };
  }

  execute(){
    switch (this.action) {
    case "add":
      console.log(this.payload);
      return this.add(this.payload); 
      // break;
    case "list":
      this.list(this.payload);
      break;
    case "del":
      this.del(this.payload);
    default:
      break;
    }
  }
    
  add(payload){
    console.log(`Adding Note: ${payload.payload}`);
    
    return this.save(payload);

  }
  async save(noteText){
    let record = new noteItem(noteText);  
    console.log('am i alive?');
    let saved = await record.save();
    console.log('***i am saved***', saved);
    return saved;
  }

  render(){
    return console.log(this.payload);
  }

  list(payload){

  }

  del(payload){
    
  }

  isValid(){

    const schema = {
      action: {type: 'string', required: true, },
      payload: {type: 'string', required: true, },
    };

    const validator = new Validator(schema);
    return validator.validate(this);
  }

}

module.exports = Note;