const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteMarchandPrivateKeys = require('../../../helpers/deleteUserPrivateKeys');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.MARCHANDS))
    .then(collection => collection.findOne({ _id: ObjectId(id) }))
    .then((marchand) => {
      if (marchand) {
        return deleteMarchandPrivateKeys(marchand);
      }

      const err = new Error(`List not found for id: ${id}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
