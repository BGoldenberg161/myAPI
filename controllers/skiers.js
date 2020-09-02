const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Skier.find()
    .then(foundSkiers => {
        res.send(foundSkiers)
    })
    .catch (err => {
        console.log(err)
        res.status(503).send({message: '🍖Did you forget to feed your Mongo?🍖'})
    })
})

router.get('/:id', (req, res) => {
    db.Skiers.findById(req.params.id)
    .then(foundSkier => {
        if(foundSkier){
            res.send(foundSkier)
        } else {
            res.status(404).send({message: '🚠Skier not located🚠'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({message: 'Service Unavailable'})
    })
})

router.post('/', (req, res) => {
    db.Skier.create(req.body)
    .then(createdSkier => {
        res.status(201).send(createdSkier)
    })
    .catch(err => {
        console.log('Error while creating new skier:', err)
        if(err.name === 'Validation Error'){
            res.status(406).send({message: 'Validation Error'})
        } else {
            res.status(503).send({message: '🍖Did you forget to feed your Mongo?🍖'})
        }
    })
})

router.post('/', (req, res) => {
    db.Skier.create(req.body)
    .then(createdSkier => {
        res.status(201).send(createdSkier)
    })
    .catch(err => {
        console.log('Error while creating new skier:', err)
        if(err.name === 'Validation Error'){
            res.status(406).send({message: 'Validation Error'})
        } else {
            res.status(503).send({message: '🍖Did you forget to feed your Mongo?🍖'})
        }
    })
})

router.put('/:id', (req, res) => {
    db.Skier.findOneAndUpdate({
        _id: req.params.id
    },
    req.body,
    {
        new: true
    })
    .then(updatedSkier => {
        res.send(updatedSkier)
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({message: '🍖Did you forget to feed your Mongo?🍖'})
    })
})

router.delete('/:id', (req, res) => {
    db.Skier.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(204).send()
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({message: '🍖Did you forget to feed your Mongo?🍖'})
    })
})

module.exports = router