const Book = require('../models/books')
const statusCodes = require('http-status-codes')
const notFound = require('../errors/not-found')
// handle errors

const getAllBooks = async (req, res) => {
  books = await Book.find({})
  res.status(statusCodes.OK).json({ books, count: books.length })
  // add filters
}

const getBook = async (req, res) => {
  const bookId = req.params.id
  const book = await Book.findOne({ _id: bookId })
  // const book = await Book.findById(bookId)

  if (!book) {
    throw new notFound(`No book with id ${bookId}`)
  }

  res.status(statusCodes.OK).json({ book })
}

const createBook = async (req, res) => {
  const book = await Book.create(req.body)
  res.status(statusCodes.CREATED).json({ book })
}

const updateBook = async (req, res) => {
  const bookId = req.params.id
  const book = await Book.findOneAndUpdate({ _id: bookId }, req.body, {
    runValidators: true,
    new: true,
  })
  if (!book) {
    throw new notFound(`No book with id ${bookId}`)
  }
  res.status(statusCodes.OK).json({ update: 'true', updated_book: book })
}

const deleteBook = async (req, res) => {
  const bookId = req.params.id
  const book = await Book.findOneAndDelete({ _id: bookId })
  if (!book) {
    throw new notFound(`No book with id ${bookId}`)
  }
  res.status(statusCodes.OK).json({ delete: 'success', deleted_book: book })
}

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
}
