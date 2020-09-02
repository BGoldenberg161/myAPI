const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/skiers', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

const db = mongoose.connection

db.once('open', () => {
    console.log(`🐣Connected to MongoDb at ${db.host}:${db.port}🐣`)
})

db.on('error', (err) => {
    console.log(`Database error:\n${err}`)
})

module.exports.Skier = require('./skier')