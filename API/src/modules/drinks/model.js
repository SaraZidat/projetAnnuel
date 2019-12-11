const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  libelle: joi.string(),
  price: joi.number().required(),
  bar: joi.string(),
  description: joi.string(),
  recipe: joi.array(),
});

const updateModel = joi.object().keys({
  libelle: joi.string(),
  price: joi.number(),
  description: joi.string(),
  recipe: joi.array(),
});

module.exports = {
  createModel,
  updateModel,
};
