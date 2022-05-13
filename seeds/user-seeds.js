const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'Test1',
        email: 'test1@email.com',
        password: 'password'
    },
    {
        username: 'Test2',
        email: 'test2@email.com',
        password: 'password'
    }
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;