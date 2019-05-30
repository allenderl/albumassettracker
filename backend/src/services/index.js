const album = require('./album/album.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(album);
};
