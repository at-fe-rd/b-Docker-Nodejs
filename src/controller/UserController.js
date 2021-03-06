var mongoose = require('mongoose');
var User = require('../models/user');

exports.show = function(req, res, next) {
  User.findOne({_id: req.params.id}, (err, user) => {
    if (err) res.status(404).send(err);
    console.log(user)
    res.status(200).json(user);
  })
}

exports.create = function(req, res, next) {
  let user = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age
  });

  user.save((error,user) => {
    if (error) res.status(500).send(error);
    res.status(201).json(user);
  });
}

exports.index = function(req, res, next) {
  User.find({}, (err, users) => {
    if (err) res.status(500).send(error);
    res.status(200).json(users);
  });
}

exports.update = function(req, res, next) {
  User.findByIdAndUpdate({_id: req.params.id}, (err, user) => {
    if (error) res.status(404).send(error);
    res.status(200).json(user);
  })
}

exports.delete = function(req, res, next) {
  User.findOneAndRemove({_id: req.params.id}, (err, user) => {
    if (err) res.status(404).send(err);
    res.status(200).json(user);
  })
}