const login = require('../services/login');

module.exports = (req, res, next) => {
  const marchandToCreate = req.body;

  // console.log(userToCreate);

  login(marchandToCreate)
    .then((marchand) => {
      res.json(marchand);
    })
    .catch((err) => {
      next(err);
    });
};
