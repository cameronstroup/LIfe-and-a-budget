const { Expenses } = require('../models');

const expensesdata = [
    {
        title: 'Gas',
        Budget: 200,
        Actual: 180.58
    },
    {
        title: 'Groceries',
        Budget: 400,
        Actual: 386.87
    },
    {
        title: 'Rent',
        Budget: 1000,
        Actual: 980.00
    },
    {
        title: 'Utils',
        Budget: 300,
        Actual: 240.48
    }
]

const seedExpenses = () => Expenses.bulkCreate(expensesdata);

module.exports = seedExpenses;