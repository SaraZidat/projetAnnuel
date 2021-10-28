const { Router } = require('express');
const findOneById = require('./middleware/findOneById');
const findOneByEmail = require('./middleware/findOneByEmail');

const updateOneById = require('./middleware/updateOneById');
const find = require('./middleware/find');
const createOne = require('./middleware/createOne');
const deleteOneById = require('./middleware/deleteOneById');
const marchandCtrl = require('./marchandsCtrl');

const router = new Router();

router.route('/marchands')
  .get(find)
  .post(createOne);

router.route('/marchands/register').post(marchandCtrl.register);
router.route('/marchands/login').post(marchandCtrl.login);
router.route('/marchands/mail/:marchandEmail').get(findOneByEmail);
router.route('/marchands/:marchandId')
  .get(findOneById)
  .patch(updateOneById)
  .delete(deleteOneById);


module.exports = router;
