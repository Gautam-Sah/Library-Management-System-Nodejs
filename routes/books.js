const Router = require('express').Router()

const {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/books')
Router.route('/books').get(getAllBooks).post(createBook)
Router.route('/books/:id').get(getBook).patch(updateBook).delete(deleteBook)

module.exports = Router
