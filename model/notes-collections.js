'use strict';

const { collection } = require('./model.js');
const notesSchema = require('./notes-schema.js');


class notesCollection {

  constructor (model) {
    this.model = model;
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
    return this.model.findByIdAndDelete(this.id);

  }

  list(category){
    if(category){
      return this.model.find({ category: `${category}`})
      }
    else { return this.model.find({})}
  }
}

module.exports = notesCollection;