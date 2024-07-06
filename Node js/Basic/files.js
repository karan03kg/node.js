const fs = require("fs");
// console.log(fs);

// fs.writeFileSync("new.txt","Hello how are you");

console.log("Starting");
fs.writeFile("new2.txt","Hello how are you",()=>{
    console.log("done");
    fs.readFile("new2.txt", (error,data) =>{
        console.log(error , data.toString())
    })
})

fs.appendFile("new.txt","I hope you are good",(e,d)=>{
    console.log(e,d);
})
console.log("Ending");