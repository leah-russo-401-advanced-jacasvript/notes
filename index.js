'use strict';

const notes = require('./lib/notes.js');
const input = require('./lib/input.js');
const mongoose = require('mongoose');
require('dotenv').config();


const banana = new input(process.argv)

console.log(banana);


if(banana.action){
  mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('connected');
    const apple = new notes(banana)
    apple.execute(process.argv[2],process.argv[3]).then(result => console.log(result))
   });
 } else {
   console.log('is not a valid command')
 }


