const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// create our User model
class Savings extends Model {}


Savings.init(
 {
   id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   Budget: {
    type: DataTypes.INTEGER,
    allowNull: false
   },
   Actual: {
    type: DataTypes.DECIMAL(10,2),
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