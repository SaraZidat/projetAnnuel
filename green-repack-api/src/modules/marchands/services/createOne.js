const bcrypt = require('bcrypt');
const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteMarchandPrivateKeys = require('../../../helpers/deleteUserPrivateKeys');
const findOneByEmail = require('./findOneByEmail');

module.exports = (marchandToCreate) => {
  return createModel.validate(marchandToCreate)
    .then(() => {
      const marchand = {
        ...marchandToCreate,
        password: bcrypt.hashSync(marchandToCreate.password, 10),
      };
      return marchand;
    })
    .then((marchand) => {
      return findOneByEmail(marchand.email)
        .catch((err) => {
          if (err.status !== 404) {
            throw err;
          }

          return connect()
            .then(db => db.collection(collections.MARCHANDS))
            .then(collection => collection.insertOne(marchand))
            .then(dbResponse => deleteMarchandPrivateKeys(dbResponse.ops[0]));
        });
    });
};
