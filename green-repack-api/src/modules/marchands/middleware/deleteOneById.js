const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { marchandId } = req.params;

  deleteOneById(marchandId)
    .then((marchand) => {
      res.json(marchand);
    })
    .catch((err) => {
      next(err);
    });
};
