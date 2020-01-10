const login = require('../services/login');

module.exports = (req, res, next) => {
  const barToCreate = req.body;

  // console.log(userToCreate);

  login(barToCreate)
    .then((bar) => {
      res.json(bar);
    })
    .catch((err) => {
      next(err);
    });
};
