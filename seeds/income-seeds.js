const { Income } = require('../models');

const incomedata = [
    {
        title: 'Job',
        Budget: 600,
        Actual: 594.33
    },
    {
        title: 'Dividends',
        Budget: 30,
        Actual: 31.44
    },
    {
        title: 'Real Estate',
        Budget: 300,
        Actual: 320.50
    }
]

const seedIncome = () => Income.bulkCreate(incomedata);

module.exports = seedIncome;