const express = require('express')
const fs = require("fs")
const app = express()
const port = 3000

app.use(express.static("public"));

//Middleware 1
app.use((req,res,next)=>{
    req.hello = "How is it"
    fs.appendFileSync("data.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()}`);
    next();
})

//Middleware 2
app.use((req,res,next)=>{
    console.log("m2");
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World 1!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.hello)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})