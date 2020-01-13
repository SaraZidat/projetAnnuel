const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel } = require('../../model');
const findOneByEmail = require('../../../bars/services/findOneByEmail');

const jwtSecret = 'bars_key';
module.exports = (barToCreate) => {
  return userModel.validate(barToCreate)
    .then(() => {
      const bar = {
        ...barToCreate,
      };
      return bar;
    })

    .then((bar) => {
      return findOneByEmail(bar.email).then((barDB) => {
        const match = bcrypt.compareSync(bar.password, barDB.password);
        if (match) {
          const token = jwt.sign({ id: barDB.id }, jwtSecret, { expiresIn: '60m' });
          const barAuth = {
            ...barDB,
            token,
          };
          return barAuth;
        }
        const err = { error: 'authentication failed', status: 403 };
        return err;
      });
    });
};
