// Album-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
//  If you aren’t familiar with records, he needs to track/store the following fields per-record (at a minimum):
//     * Artist
//     * Album Title
//     * Year
//     * Record Condition
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const album = new Schema({
    artist: {
      name: {
        type: String,
        required: [true, 'Artist stage name is required']
      },
      id: {
        type: Number,
        required: [true, 'Artist id is required']
      }
    },
    title: {
      type: String,
      required: [true, 'Album title is required']
    },
    year: {
      type: String,
      required: [true, 'Year is required']
    },
    condition: {
      type: String,
      required: [true, 'Condition is required']
    },
    createdAt: {type: Date, 'default': Date.now},
    updatedAt: {type: Date, 'default': Date.now}
  });


  return mongooseClient.model('album', album);
};


