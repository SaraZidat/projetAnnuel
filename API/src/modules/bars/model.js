const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  password: joi.string().required(),
  email: joi.string().email().required(),
  name: joi.string().empty(''),
  address: joi.string().empty(''),
  webSite: joi.string().empty(''),
  menu: joi.array().empty(''),
  createDate: joi.date().empty(''),
  deleteDate: joi.date().empty(''),
  stock: joi.array().empty(''),
});

const updateModel = joi.object().keys({
  password: joi.string(),
  email: joi.string().email(),
  name: joi.string(),
  address: joi.string().empty(''),
  webSite: joi.string(),
  menu: joi.array(),
  deleteDate: joi.date(),
  stock: joi.array(),
  isValidate: joi.boolean(),

});

module.exports = {
  createModel,
  updateModel,
};
