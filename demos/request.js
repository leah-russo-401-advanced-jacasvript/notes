const mongood = require('mongoose');

// we are 'destructuring the schema here:

const { Schema } = mongoose;

const RequestSchema = new Schema( {
  url: {type: String, required: true },
  method: { type: String, required: true, enum: ['GET','POST'] },
})