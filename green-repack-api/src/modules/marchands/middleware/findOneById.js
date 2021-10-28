const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { marchandId } = req.params;
  findOneById(marchandId)
    .then((marchand) => {
      res.json(marchand);
    })
    .catch((err) => {
      next(err);
    });
};
