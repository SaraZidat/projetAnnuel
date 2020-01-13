const { Router } = require('express');
const loginBar = require('./bars/middleware/login');
const loginAdmin = require('./admins/middleware/login');
const loginUser = require('./users/middleware/login');


const router = new Router();

router.route('/auth/bars')
  .post(loginBar);

router.route('/auth/users')
  .post(loginUser);

router.route('/auth/admins')
  .post(loginAdmin);

module.exports = router;
