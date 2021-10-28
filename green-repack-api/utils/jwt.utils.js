const jwt = require('jsonwebtoken');

module.exports = {
  generateTokenForMarchand(marchandData) {
    return jwt.sign({
      id: marchandData.id,
      mail: marchandData.mail,
    },
    // eslint-disable-next-line no-undef
    JWT_SIGN_SECRET,
    {
      expiresIn: '8h',
    });
  },
};
