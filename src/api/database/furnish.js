'use strict';

const flatten = require('lodash/flatten');
const flattenDeep = require('lodash/flattenDeep');

const admins = require('./seeds/admins');
const database = require('./index.js');
const log = require('../utils/log');
const populator = require('../lib/populator');
const siteScraper = require('../lib/siteScraper');
const User = require('../app/models/user.js');
const Venue = require('../app/models/venue.js');
const venues = require('./seeds/venues');

function furnish() {
  return database
    .drop()
    .then(() => {
      const promises = flattenDeep(venues).map((venue) => {
        return new Venue(venue).save();
      });

      return Promise.all(promises);
    })
    .then(() => {
      const sites = flatten([require('./seeds/events'), siteScraper.run()]);

      return populator.addMicNights(sites, 'SCRAPE SUCCESSFULLY FINISHED');
    })
    .then(() => {
      return new User(admins[0]).save();
    })
    .then(() => log('ADMINS SUCCESSFULLY ADDED'))
    .then(() => log('DATABASE FURNISHED'))
    .catch((err) => {
      throw new Error(err.message);
    });
}

database.runSingleAction(furnish);
