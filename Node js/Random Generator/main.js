const express = require('express')
const mongoose = require('mongoose');
const employee = require("./random/employee")
const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

let getRandom = (arr)=>{
  let rno = Math.floor(Math.random()*(arr.length-1));
  return arr[rno];
}

app.get('/', (req, res) => {
    res.render('index', {foo: 'FOO'});
})

let randomname = ["Rohan","Sham","Sohan","Mohan"];
let randomlanguage = ["Python","js","C++","Java"];
let randomcity = ["Kolkata","Mysure","Moradabad","Bilaspur"]
app.get('/generate', async(req, res) => {
  await employee.deleteMany({});
  for (let index = 0; index < 2; index++) {
      await employee.create({
      name:getRandom(randomname),
      salary:Math.floor(Math.random()*20000),
      language:getRandom(randomlanguage),
      city:getRandom(randomcity),
      isManager:(Math.random()>0.5)?true:false
    })
  }
  res.render('index', {foo: 'FOO'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})