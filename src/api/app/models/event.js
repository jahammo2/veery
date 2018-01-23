'use strict';

const mongoose = require('mongoose');
const Venue = require('./venue');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  frequency: {
    type: String,
    enum: [
      'first of the month',
      'one time',
      'weekly'
    ]
  },
  startDate: Date,
  startTime: String,
  title: String,
  type: String,
  venue: {
    type: Schema.Types.ObjectId,
    ref: 'Venue'
  }
});

eventSchema.pre('save', function(next) {
  const event = this;

  if (event.venue) {
    const options = { $push: { events: event._id } };
    return Venue.findByIdAndUpdate(event.venue, options, next);
  }

  next();
});

module.exports = mongoose.model('Event', eventSchema);
