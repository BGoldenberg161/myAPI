const mongoose = require('mongoose')

let BestResultsSchema = new mongoose.Schema({
    result: {
        type: String,
        required: true
    },
    event: {
        name: String,
        year: Number
    }
})

let skierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1, 
        maxlength: 99
    },
    age: Number,
    birthplace: String,
    residence: String,
    olympian: {
        type: Boolean,
        default: false
    },
    bestResults: [BestResultsSchema]
})

module.exports = mongoose.model('Skier', skierSchema)