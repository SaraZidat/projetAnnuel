const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  libelle: joi.string(),
  price: joi.number(),
  bar: joi.string(),
  isAlcohol: joi.boolean(),
  description: joi.string(),
  recipe: joi.array(),
});

const updateModel = joi.object().keys({
  libelle: joi.string(),
  bar: joi.string(),
  price: joi.number(),
  isAlcohol: joi.boolean(),
  description: joi.string(),
  recipe: joi.array(),

});

module.exports = {
  createModel,
  updateModel,
};
