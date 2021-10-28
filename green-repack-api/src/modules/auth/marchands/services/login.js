const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel } = require('../../model');
const findOneByEmail = require('../../../marchands/services/findOneByEmail');

const jwtSecret = 'marchands_key';
module.exports = (marchandToCreate) => {
  return userModel.validate(marchandToCreate)
    .then(() => {
      const marchand = {
        ...marchandToCreate,
      };
      return marchand;
    })

    .then((marchand) => {
      return findOneByEmail(marchand.email).then((marchandDB) => {
        const match = bcrypt.compareSync(marchand.password, marchandDB.password);
        if (match) {
          const token = jwt.sign({ id: marchandDB.id }, jwtSecret, { expiresIn: '60m' });
          const marchandAuth = {
            ...marchandrDB,
            token,
          };
          return marchandAuth;
        }
        const err = { error: 'authentication failed', status: 403 };
        return err;
      });
    });
};
