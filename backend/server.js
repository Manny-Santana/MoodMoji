// =======================================
//              DEPENDENCIES
// =======================================
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

// Dependency configurations
// require('dotenv').config()
const app = express();

//PORT
const PORT = 3003;

const MONGODB_URI = "mongodb://localhost:27017" + "/studentDB";

//CORS

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.json());
app.use(cors(corsOptions));

// Error / Disconnection
mongoose.connection.on("error", err =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

// Fix depreciation warnings
mongoose.set("useFindAndModify", false);

// =======================================
//              Database connection
// =======================================
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// =======================================
//              Controllers/Routes
// =======================================
const studentsController = require("./controllers/students.js");
const usersController = require("./controllers/users.js");
app.use("/students", studentsController);
app.use("/users", usersController);

// =======================================
//              Listen
// =======================================
app.listen(PORT, () => {
  console.log("listening on  PORT 3000!");
});
