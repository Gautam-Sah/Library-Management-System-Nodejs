const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: 500,
  },
  author: {
    type: String,
    required: [true, 'Author Name is required'],
    maxlength: 500,
  },
  category: {
    type: String,
    enum: ['fiction', 'Non-fiction'],
  },
  sub_category: {
    type: String,
  },
  no_of_pages: Number,
})

module.exports = mongoose.model('Book', bookSchema)
