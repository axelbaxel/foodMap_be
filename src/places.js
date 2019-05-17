const express = require('express');
const placeRouter = express.Router();
const { createElement, getIndexById, getElementById, updateElement} = require('./utils.js')
const places = require('./places.json')


placeRouter.get('', (req, res, next) => {
    res.send(places)
})

placeRouter.get('/id/:id', (req, res, next) => {
    //console.log(getElementById(req.params.id, places))
    
    if(getElementById(req.params.id, places)) {
        res.send(getElementById(req.params.id, places))
    } else {
        res.status(404).send(`Cannot find place with id ${req.params.id}`)
    }
    
})

placeRouter.put('/id/:id', (req, res, next) => {
    const plUpdate = req.query
    const id = req.params.id
    if(getElementById(id, places)) {
        updateElement(id, plUpdate, places)
        res.send(getElementById(id, places))
    } else {
        res.status(404).send('Place not found')
    }
})

placeRouter.post('', (req, res, next) => {
    res.status(501).send('Under Construction')
    /*
    const newPlace = createElement(req.query)
    if (newPlace) {
        expressions.push(newPlace)
        res.status(201).send(newPlace)
    } else {
        res.status(400).send('No valid place')
    }
    */
})

placeRouter.get('/:string', (req, res, next) => {
    res.status(404).send('There is nothing here')
})
placeRouter.put('/:string', (req, res, next) => {
    res.status(404).send('There is nothing here')
})
placeRouter.post('/:string', (req, res, next) => {
    res.status(404).send('There is nothing here')
})
placeRouter.delete('/:string', (req, res, next) => {
    res.status(404).send('There is nothing here')
})
module.exports = placeRouter