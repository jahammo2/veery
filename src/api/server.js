'use strict';

const app = require('./config/app.js');

app.listen(process.env.PORT || 3000, () => {
  console.log('💸 App listening on port 3000'); // eslint-disable-line
});
