const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/skiers', require('./controllers/skiers'))

app.get('/', (req, res) => {
    res.send('You hit the 🏡 route of da Mongo Skier Server')
})

app.listen(3000, () => {console.log(`You're listening to the smooth smooth sounds of port 3000`)})