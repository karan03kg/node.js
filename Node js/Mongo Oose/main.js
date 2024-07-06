import mongoose from "mongoose";
import express from "express"
import { todo } from "./modules/todo.js";
await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', async(req, res) => {
  const Todo = new todo({desc:"description of todo",isDone:false});
  Todo.save();
  // const ans = await todo.findOne({name:"second todo"})
  // console.log()
  res.send('Hello World2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})