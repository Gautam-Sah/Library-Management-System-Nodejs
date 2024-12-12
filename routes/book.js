const Router = require('express').Router()

Router.route('/books').get(async (req, res) => {
  res.send('books')
})

module.exports = Router
