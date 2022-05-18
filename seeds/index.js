const seedUsers = require('./user-seeds');
const seedIncome = require('./income-seeds');
const seedExpenses = require('./expenses-seeds');
const seedSavings = require('./savings-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');
    await seedIncome();
    console.log('--------------');
    await seedExpenses();
    console.log('--------------');
    await seedSavings();
    console.log('--------------');

    process.exit(0);
}

seedAll();