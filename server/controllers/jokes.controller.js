const { response } = require('express')
const Joke = require('./../models/jokes.model')

//Get All
module.exports.allJokes = (req, res) => {
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err))
}

//Get One
module.exports.oneJoke = (req, res) => {
    Joke.findOne({_id : req.params.id})
        .then(song => res.json(song))
        .catch(err => res.json(err))
}

//Create
module.exports.createJoke = (req, res) => {
    const newJoke = req.body
    Joke.create(newJoke)
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

//Update | combination of "getOne" and "delete"
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id : req.params.id}, //criteria
        req.body, // updated values
        {new: true, runValidators: true} //options
    )
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

//Delete
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id : req.params.id})
        .then(status => res.json(status))
        .catch(err => res.json(err))
}