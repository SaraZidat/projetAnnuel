const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteUserPrivateKeys = require('../../../helpers/deleteUserPrivateKeys');

module.exports = (first = 20, offset = 0, term) => {
  return connect()
    .then(db => db.collection(collections.ADMINS))
    .then(collection => collection.find(
      term ? { $text: { $search: term } } : null,
    ).limit(first).skip(offset))
    .then(cursor => cursor.toArray())
    .then((admins) => {
      return admins.map((admin) => {
        return deleteUserPrivateKeys(admin);
      });
    });
};
