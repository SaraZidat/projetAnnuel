const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const marchandToUpdate = req.body;
  const { marchandId } = req.params;

  updateOneById(marchandId, marchandToUpdate)
    .then((marchand) => {
      res.json(marchand);
    })
    .catch((err) => {
      next(err);
    });
};
