require('babel-register')({
  presets: ['env'],
  plugins: ['transform-es2015-destructuring', 'transform-object-rest-spread']
});
// Import the rest of our application.
module.exports = require('./server');
