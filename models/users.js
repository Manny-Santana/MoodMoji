const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: String,
    email: {type: String, required: true, unique: true},
    password:  {type: String, required: true}

})

const userModel = mongoose.model("userInfo", userSchema);
module.exports = userModel;