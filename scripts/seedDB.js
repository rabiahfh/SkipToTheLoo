const mongoose = require("mongoose");
const db = require("../models");
 

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const restroomSeed = [
  {
    address: "89 E 42nd Street, New York City, NY 10017-5503",
    lat: "40.75259 North",
    long:"73.977371 West",
    date: new Date(Date.now())
  },
    {
    address: "1000 5th Ave, New York City, NY 10028-0198",
    lat: "40.779437",
    long:"-73.963244",
    date: new Date(Date.now())
  }
];

db.Restroom
  .remove({})
  .then(() => db.restroomSeed.collection.insertMany(restroomSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
