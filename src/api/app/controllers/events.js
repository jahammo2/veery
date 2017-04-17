'use strict';

const Event = require('../models/event');

function index(req, res) {
  Event
    .find({})
    .populate('venue')
    .sort('startDate')
    .then((events) => res.json({ events }) );
}

module.exports = {
  index
};