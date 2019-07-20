const express = require('express')
const app = express()
const port = 5000

app.use('/', express.static('build'))
app.use('/about', express.static('build'))
app.use('/projects', express.static('build'))
app.use('/experience', express.static('build'))
app.use('/articles', express.static('build'))
app.use('/podcasts', express.static('build'))
app.use('/post', express.static('posts'))

app.listen(port, () => console.log(`App running on ${port}!`))