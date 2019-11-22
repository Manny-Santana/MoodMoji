const mongoose = require('mongoose');
const usersModel = require("./users");

const seedUsersInfo = [
    {
        parentName: "Pam",
        email: "pam@gmail.com",
        password: "pam"
    },
    {    
        parentName: "Perrin",
        email: "perrin@gmail.com",
        password: "perrin"
    },
    {
      parentName: "Manny",
        email: "manny@gmail.com",
        password: "manny"
    },
    {
        parentName: "Pratz",
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
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/studentDB'
    
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