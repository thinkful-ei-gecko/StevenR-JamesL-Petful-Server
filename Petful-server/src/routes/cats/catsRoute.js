const express = require('express');
const catsRoute = express.Router();
const catsService = require('./catsService');

catsRoute
  .route('/')
  .get((req, res, next) => {
    const cats = catsService.displayCats();
    res.status(200).send(cats)
  })
  .delete((req, res, next) => {
    const adoptedCat = catsService.adoptCat();
    if(adoptedCat === undefined) {
      res.status(400).send({ message: 'Could not find cat to adopt' });
    }
    res.status(200).send(adoptedCat);
  });

module.exports = catsRoute;