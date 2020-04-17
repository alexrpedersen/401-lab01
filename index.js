  
'use strict';

const Note = require('./lib/note.js');
const Input = require('./lib/input.js');
const mongoose = require('mongoose');
const noteItem = require('./models/note-schema');
const MONGODB_URI = "mongodb://test:test@127.0.0.1:27017/noterepo"

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });



const input = new Input();
const note = new Note(input);


(input.valid())
? note.execute().then(mongoose.disconnect).catch(e => console.log('***index***',e))
: help();


function help() {
  console.log(`
    USAGE: 
    -a/--add - Add a note
    -l/--list - List notes
    -d/--delete - delete a note
    `);
  process.exit();
}