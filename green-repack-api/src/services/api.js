const { Router } = require('express');
const authRouter = require('../modules/auth/router');
const usersRouter = require('../modules/users/router');
const adminsRouter = require('../modules/admins/router');
const marchandsRouter = require('../modules/marchands/router');
const ordersRouter = require('../modules/orders/router');
const drinksRouter = require('../modules/drinks/router');
const productsRouter = require('../modules/products/router');

const router = new Router();

// Service  API
router.use('/api', authRouter);
router.use('/api', usersRouter);
router.use('/api', adminsRouter);
router.use('/api', marchandsRouter);
router.use('/api', ordersRouter);
router.use('/api', drinksRouter);
router.use('/api', productsRouter);
// End of service API

module.exports = router;
