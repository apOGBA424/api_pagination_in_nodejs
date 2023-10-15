const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    country: {type: Array, required: true},
    phone: {type: String, required: true},
    gender: {type: String, required: true},
});


module.exports = new mongoose.model("User", userSchema);
