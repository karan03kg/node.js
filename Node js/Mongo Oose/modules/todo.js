import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    name: {type:String,default:"Hey"},
    desc: String,
    isDone:Boolean
  });

export const todo = mongoose.model('todoss',todoSchema);