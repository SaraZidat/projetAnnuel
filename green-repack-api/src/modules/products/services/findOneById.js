const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.PRODUCTS))
    .then(collection => collection.findOne({ _id: ObjectId(id) }))
    .then((product) => {
      if (product) {
        return product;
      }

      const err = new Error(`Product not found for id: ${id}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
