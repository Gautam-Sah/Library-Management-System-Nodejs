const connectDb = (url) => {
  return require('mongoose').connect(url)
}

module.exports = connectDb
