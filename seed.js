const mongoose = require('mongoose');
const UsersModel = require('./models/Users');

require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(async () => {
    const user = new UsersModel({
      name: "Rahul",
      email: "abs@xyz.com",
      age: 20
    });

    await user.save();
    console.log("User added successfully!", user);
  })
  .catch((err) => {
    console.error("User Details not Posted in Database:", err);
  });