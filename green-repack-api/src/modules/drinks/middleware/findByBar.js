const isUndefined = require('lodash/isUndefined');
const findByBar = require('../services/findByBar');

module.exports = (req, res, next) => {
  const { barId } = req.params;

  const {
    first,
    offset,
    term,
  } = req.query;
  let firstInt;
  let offsetInt;

  if (!isUndefined(first)) firstInt = parseInt(first, 10);
  if (!isUndefined(offset)) offsetInt = parseInt(offset, 10);

  findByBar(barId, firstInt, offsetInt, term)
    .then((bdd) => {
      res.json(bdd);
    })
    .catch((err) => {
      next(err);
    });
};
