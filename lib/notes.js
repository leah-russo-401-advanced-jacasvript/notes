'use strict';

const NoteFromCommandLine = require("./input");
const NoteModel = require('../model/model.js');

// function Note(id,note) {
//   this.id = id;
//   this.note = note;
// }

class Note {
  constructor(args){
    this.id = args.id;
    this.action = args.action
    this.note = args.payload
    this.category = args.category
  }


  add() {
    console.log(`adding note: ${this.note}`)
    const note = new NoteModel({
      text: this.note,
      category: this.category
    })
    return note.save();
  }

  delete(id) {
    return NoteModel.findByIdAndDelete(this.id);

  }

  list(category){
    if(category){
      return NoteModel.find({ category: `${category}`})
      }
    else { return NoteModel.find({})}
  }


  execute(action,payload) {
    if(action=="-a" || action=='--add'){
      return this.add(payload);
    }

    if(action=="--list"){
      return this.list(this.category);
    }

    if(action == "--delete"){
      return this.delete()
    }
  }
}



// Note.prototype.add = function(payload) {
// //checks the action/payload object and passes the note through the bananas function
// console.log(`adding note: ${payload}`)

// }

// Note.prototype.execute = function(action,payload) {
//   //if valid note, add note
//   //else dont
//   if(process.argv[2]=="-a" || process.argv[2]=='--add'){
//     this.add(payload);
//   }
// }

module.exports = Note;