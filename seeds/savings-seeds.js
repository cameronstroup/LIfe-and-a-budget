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
    }
]

const seedSavings = () => Savings.bulkCreate(savingsdata);

module.exports = seedSavings;