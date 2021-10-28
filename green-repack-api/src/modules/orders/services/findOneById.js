const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.ORDERS))
    .then(collection => collection.findOne({ _id: ObjectId(id) }))
    .then((order) => {
      if (order) {
        return order;
      }

      const err = new Error(`Order not found for id: ${id}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
