const mongoose = require('mongoose')
const Schema = mongoose.Schema

var PhotoSchema = new Schema({
    likes: Number,
    photo: String,
    name: String,
    description: String
})

const PhotoModel = mongoose.model('Photo', PhotoSchema)

module.exports = { PhotoModel} 