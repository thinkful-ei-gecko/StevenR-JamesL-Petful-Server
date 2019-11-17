const express = require('express');
const usersRoute = express.Router();
const usersService = require('./usersService');

usersRoute
  .route('/')
  .get((req, res, next) => {
    const users = usersService.displayUsers();
    res.status(200).send(users)
  })
  .delete((req, res, next) => {
    const user = usersService.dequeueUser();
    if(user === undefined) {
      res.status(400).send({ message: 'Could not find user to remove' });
    }
    res.status(200).send(user);
  });

module.exports = usersRoute;