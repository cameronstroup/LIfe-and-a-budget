const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create our User model
class Savings extends Model {}


Savings.init(
 {
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   Budget: {
    type: DataTypes.INTEGER,
    allowNull: false
   },
   Actual: {
    type: DataTypes.INTEGER,
    allowNull: false
   },
  },
  {
    sequelize,
    
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Savings'
  }
);
module.exports = Savings;