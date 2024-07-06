const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchTitle = "Search Now"
  res.render('index',{siteName:siteName,searchTitle:searchTitle})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})