const { Router } = require('express');
const findOneById = require('./middleware/findOneById');
const updateOneById = require('./middleware/updateOneById');
const find = require('./middleware/find');
const findByBar = require('./middleware/findByBar');

const createOne = require('./middleware/createOne');
const deleteOneById = require('./middleware/deleteOneById');

const router = new Router();

router.route('/drinks')
  .get(find)
  .post(createOne);

router.route('/drinks/:drinkId')
  .get(findOneById)
  .patch(updateOneById)
  .delete(deleteOneById);
/** **expérimental */
router.route('/bars/:barId/drinks')
  .post(createOne)
  .get(findByBar);

router.route('/bars/:barId/drinks/:drinkId')
  .delete(deleteOneById)
  .patch(updateOneById)
  .get(findOneById);
/** ** */
module.exports = router;
