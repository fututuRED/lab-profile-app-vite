const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

router.get('/api/users/:id', (req, res, next) => {
  const userId = req.params.id;
  User.findById(userId)
    .then((user) => res.json(user))
    .catch((err) => next(err));
});

router.put('/api/users/:id', (res, req, next) => {
  const userId = req.params.id;
  const { image } = req.body;
  User.findByIdAndUpdate(userId, { image }, { new: true })
    .then((updatedUser) => res.status(202).json(updatedUser))
    .catch((err) => next(err));
});

module.exports = router;
