const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Library Management System'))

app.listen(8080, () => console.log('app is listening on port 8080'))
