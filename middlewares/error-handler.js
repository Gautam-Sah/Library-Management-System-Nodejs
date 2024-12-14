const statusCodes = require('http-status-codes')
const customAPIError = require('../errors/custom-api')

const errorHandler = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res
    .status(statusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: 'something went wrong' })
}

module.exports = errorHandler
