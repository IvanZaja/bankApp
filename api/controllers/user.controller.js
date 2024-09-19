const User = require('../models/user.model');
const mongoose = require('mongoose');

module.exports.create = (req, res, next) => {
    console.log(req.body);
    User.create(req.body)
        .then((user) => {
            res.status(201).json(user)
            res.json(user);
        })
        .catch(next);
}