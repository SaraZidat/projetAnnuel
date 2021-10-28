const { Router } = require('express');
const loginMarchand = require('./marchands/middleware/login');
const loginAdmin = require('./admins/middleware/login');
const loginUser = require('./users/middleware/login');


const router = new Router();

router.route('/auth/marchands')
  .post(loginMarchand);

router.route('/auth/users')
  .post(loginUser);

router.route('/auth/admins')
  .post(loginAdmin);

module.exports = router;
