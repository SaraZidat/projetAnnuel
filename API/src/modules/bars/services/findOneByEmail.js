const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteBarPrivateKeys = require('../../../helpers/deleteUserPrivateKeys');

module.exports = (email) => {
  return connect()
    .then(db => db.collection(collections.BARS))
    .then(collection => collection.findOne({ email }))
    .then((dbResponse) => {
      if (dbResponse) {
        return deleteBarPrivateKeys(dbResponse);
      }

      const err = new Error(`Bar not found for email: ${email}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
