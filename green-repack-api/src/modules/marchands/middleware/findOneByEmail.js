const findOneByEmail = require('../services/findOneByEmail');

module.exports = (req, res, next) => {
  const { marchandEmail } = req.params;
  findOneByEmail(marchandEmail)
    .then((marchand) => {
      res.json(marchand);
    })
    .catch((err) => {
      next(err);
    });
};
