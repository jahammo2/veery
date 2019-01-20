'use strict';

const moment = require('moment');

const buildWeekly = require('../../../utils/eventObjects/buildWeekly');
const Venue = require('../../../app/models/venue');

function events() {
  return Venue
    .findOne({ name: 'Fonda Karaoke Santa Guadalupe', city: 'Medellín, Antioquia' })
    .then((venue) => {
      return [
        {
          ...buildWeekly(7, venue),
          startTime: '12:00am',
          title: 'Karaoke'
        }
      ];
    });
}

module.exports = events();
