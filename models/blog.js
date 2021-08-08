const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema defines the structure of the documents to be stored inside a collection
// the thing that a model wraps around

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// the model surrounds a schema and provies us with an interface by which to communicate with a database collection for that document type

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

