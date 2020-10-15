'use strict';

// configures all the properties and values within a file titled `.env`
require('dotenv').config();
const mongoose = require('mongoose');

const { Schema } = mongoose;

// first we create a schema for a collection we would like to use
const NoteSchema = new Schema({
  text: { type: String, required: true },
  category: { type: String, required: false },
});

module.exports = NoteSchema;


