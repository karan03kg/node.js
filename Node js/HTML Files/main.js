const express = require('express')
const blog = require('./routes/blog')

const app = express()
const port = 3000

app.use('/blog',blog)    //we use /blog to tell that start from /blog will handle by blog
app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.post('/', (req, res) => {
    res.send('Hello World2 post!')
})

app.get('/api', (req, res) => {
    res.json("{a:1 , b:2}")
  })

app.get('/index', (req, res) => {
    res.sendFile('Templates/index.html',{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})