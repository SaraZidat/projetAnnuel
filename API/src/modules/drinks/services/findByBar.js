const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (barId, first = 20, offset = 0) => {
  const bar = {
    bar: barId,
  };
  return connect()
    .then(db => db.collection(collections.DRINKS))
    .then(collection => collection.find(bar,
      { limit: first, skip: offset }))
    .then(cursor => cursor.toArray());
};
