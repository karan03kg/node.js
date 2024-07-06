use('sigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "name": "java",
      "price": 20000,
      "instructor": "Harry"
    },
    {
      "name": "python",
      "price": 18000,
      "instructor": "Sally"
    },
    {
      "name": "javascript",
      "price": 15000,
      "instructor": "Mike"
    },
    {
      "name": "ruby",
      "price": 22000,
      "instructor": "Nina"
    },
    {
      "name": "c++",
      "price": 25000,
      "instructor": "John"
    },
    {
      "name": "swift",
      "price": 23000,
      "instructor": "Emma"
    },
    {
      "name": "php",
      "price": 17000,
      "instructor": "Tom"
    },
    {
      "name": "c#",
      "price": 19000,
      "instructor": "Laura"
    },
    {
      "name": "kotlin",
      "price": 21000,
      "instructor": "Steve"
    },
    {
      "name": "go",
      "price": 16000,
      "instructor": "Anna"
    }
  ]
  );

// Print a message to the output window.
console.log(`Done insertion`);

