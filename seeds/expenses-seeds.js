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
        title: 'Utilities',
        Budget: 300,
        Actual: 240.48
    },
    {
        title: 'Internet',
        Budget: 100,
        Actual: 75.52
    },
    {
        title: 'Car Insurance',
        Budget: 300,
        Actual: 250.00
    },
    {
        title: 'Health Insurance',
        Budget: 100,
        Actual: 78.95
    },
    {
        title: 'Miscellaneous',
        Budget: 200,
        Actual: 176.87
    }
]

const seedExpenses = () => Expenses.bulkCreate(expensesdata);

module.exports = seedExpenses;