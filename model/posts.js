const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    headline: {type: String, required: true},
    author_id: {type: String, required: true},
    views: {type: String, required: true},
    likes: {type: String, required: true},
    published: {type: String, required: true},
},{timeStamp: true});


module.exports = new mongoose.model("Post", postSchema);;
