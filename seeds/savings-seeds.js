const { Savings } = require('../models');

const savingsdata = [
    {
        title: 'Emergency',
        Budget: 200,
        Actual: 190.50
    },
    {
        title: 'Stock Market',
        Budget: 300,
        Actual: 290.99
    },
    {
        title: 'Real Estate Property',
        Budget: 500,
        Actual: 456.50
    },
    {
        title: 'HSA',
        Budget: 50,
        Actual: 50.00
    },
    {
        title: 'Roth IRA',
        Budget: 300,
        Actual: 275.00
    }
]

const seedSavings = () => Savings.bulkCreate(savingsdata);

module.exports = seedSavings;