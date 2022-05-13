const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const incomeRoutes = require('./income-routes.js');
const expensesRoutes = require('./expenses-routes');
const savingsRoutes = require('./savings-routes');

router.use('/users', userRoutes);
router.use('/income', incomeRoutes);
router.use('/expenses', expensesRoutes);
router.use('/savings', savingsRoutes);

module.exports = router;
