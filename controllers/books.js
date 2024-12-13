const Book = require('../models/books')

const getAllBooks = async (req, res) => {
  res.send('get all books')
}

const getBook = async (req, res) => {
  res.send('get book')
}

const createBook = async (req, res) => {
  res.send(' create books')
}

const updateBook = async (req, res) => {
  res.send('update books')
}

const deleteBook = async (req, res) => {
  res.send('delete books')
}

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
}
