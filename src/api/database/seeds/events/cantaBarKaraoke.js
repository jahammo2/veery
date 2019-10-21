'use strict';

const moment = require('moment');

const buildWeekly = require('../../../utils/eventObjects/buildWeekly');
const Venue = require('../../../app/models/venue');

function events() {
  return Venue
    .findOne({ name: 'Canta Bar Karaoke Caverna', city: 'Ciudad de México' })
    .then((venue) => {
      return [
        {
          ...buildWeekly(7, venue),
          startTime: '10:00pm',
          title: 'Canta Bar Karaoke'
        }
      ];
    });
}

module.exports = events();
