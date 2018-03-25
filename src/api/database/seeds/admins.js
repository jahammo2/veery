'use strict';

const config = require('../../config');

const admins = [{
  email: 'admin@veery.com',
  password: config.admin.password,
  role: 'admin'
}];

module.exports = admins;
