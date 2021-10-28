const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel } = require('../../model');
const findOneByEmail = require('../../../admins/services/findOneByEmail');
const deleteUserPrivateKeys = require('../../../../helpers/deleteUserPrivateKeys');

const jwtSecret = 'admins_key';
module.exports = (userToCreate) => {
  return userModel.validate(userToCreate)
    .then(() => {
      const user = {
        ...userToCreate,
      };
      return user;
    })

    .then((user) => {
      return findOneByEmail(user.email).then((userDB) => {
        const match = bcrypt.compareSync(user.password, userDB.password);
        if (match) {
          const token = jwt.sign({ id: userDB.id }, jwtSecret, { expiresIn: '60m' });
          const userAuth = {
            ...userDB,
            token,
          };
          deleteUserPrivateKeys(userAuth);
          return userAuth;
        }
        const err = { error: 'authentication failed', status: 403 };
        return err;
      });
    });
};
