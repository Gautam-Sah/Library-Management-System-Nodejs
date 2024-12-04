const connectDb = (url) => {
  console.log('MongoDB connected')
  return require('mongoose').connect(url)
}

module.exports = connectDb
