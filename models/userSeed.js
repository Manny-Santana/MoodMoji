const mongoose = require('mongoose');
const usersModel = require("./users");

const seedUsersInfo = [
    {
        fullName: "Pam",
        email: "pam@gmail.com",
        password: "pam"
    },
    {    
      fullName: "Perrin",
        email: "perrin@gmail.com",
        password: "perrin"
    },
    {
      fullName: "Manny",
        email: "manny@gmail.com",
        password: "manny"
    },
    {
      fullName: "Pratz",
        email: "pratz@gmail.com",
        password: "pratz"
    }
];
   
// Seeding function
const seedDB = () => {
    // Declare db name, URI, and instantiate connection
    // =======================================
    //              DATABASE
    // =======================================
    //const MONGODB_URI = "mongodb://localhost:27017" + "/studentDB";
    const MONGODB_URI = process.env.mongo_URI || 'mongodb://localhost/DB_NAME' 
    
    mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true
    });
    mongoose.connection.once("open", () => {
      console.log("connected to mongo");
    });

    //Delete database collection seed data
usersModel.collection.drop();

usersModel.create(seedUsersInfo, (err, newItems) => {
    if (err) {
      console.log('Seeding error: ', err);
    } else {
      console.log('Seeding OK: ', newItems);
    }
    dbConnection.close();
  });
}

seedDB();

module.exports = seedUsersInfo