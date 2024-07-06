const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World jkhkjhkhd!')
})

app.get('/about', (req, res) => {
    res.send('Hello About')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog')
})

app.get('/blog/:slug', (req, res) => {
  //logic to fetch slugs from db
  res.send(`Hello blog ${req.params.slug}`)
})

app.post('/', (req, res) => {
  res.send('Hello this is post request')
})

app.put('/', (req, res) => {
  res.send('Hello this is put request')
})

// app.get('/blog/intro-to-js', (req, res) => {
//   //logic to fetch intro to js from db
//   res.send('Hello blog of intro to js')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
