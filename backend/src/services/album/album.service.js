// Initializes the `Album` service on path `/album`
const createService = require('feathers-mongoose');
const createModel = require('../../models/album.model');
const hooks = require('./album.hooks');
const filters = require('./album.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'album',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/album', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('album');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
