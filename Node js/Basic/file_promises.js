import fs from "fs/promises"
let a = await fs.readFile("new.txt");  //we use await here without async because we are in module
console.log(a.toString());

let b = await fs.appendFile("new.txt","\n you are doing well");
console.log(b);