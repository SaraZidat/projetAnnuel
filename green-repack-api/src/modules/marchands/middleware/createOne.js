const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const marchandToCreate = req.body;

  console.log(marchandToCreate);

  createOne(marchandToCreate)
    .then((marchand) => {
      res.json(marchand);
    })
    .catch((err) => {
      next(err);
    });
};
