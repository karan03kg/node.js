//create a new database
use("crudDb")
console.log(db)
db.createCollection("courses")

//insertion
// db.courses.insertOne({
//     name:"web dev course",
//     price:0,
//     assignment:12
// })

// db.courses.insertMany([
//     {
//       "name": "web dev course",
//       "price": 0,
//       "assignment": 12
//     },
//     {
//       "name": "full stack development",
//       "price": 100,
//       "assignment": 10
//     },
//     {
//       "name": "frontend development",
//       "price": 50,
//       "assignment": 8
//     },
//     {
//       "name": "backend development",
//       "price": 120,
//       "assignment": 15
//     },
//     {
//       "name": "responsive design",
//       "price": 80,
//       "assignment": 7
//     },
//     {
//       "name": "javascript frameworks",
//       "price": 90,
//       "assignment": 11
//     },
//     {
//       "name": "HTML & CSS",
//       "price": 0,
//       "assignment": 5
//     },
//     {
//       "name": "web accessibility",
//       "price": 70,
//       "assignment": 9
//     },
//     {
//       "name": "web performance",
//       "price": 110,
//       "assignment": 6
//     },
//     {
//       "name": "dev ops",
//       "price": 130,
//       "assignment": 14
//     }
//   ]
//   )

//read
// let a = db.courses.find({price : 0})
// console.log(a)

// console.log(a.count())

//update
// db.courses.updateOne({price:0} , {$set:{price:100}})

// db.courses.updateMany({price:0} , {$set:{price:1000}})

//delete

// db.courses.deleteOne({price:100})
db.courses.deleteMany({price:1000})