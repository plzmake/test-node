'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubcriptionPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SubcriptionPlan.init({
    
   
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    price:DataTypes.STRING,
    duration:DataTypes.STRING,
    feature:DataTypes.STRING, 
    

   
  }, {
    sequelize,
    modelName: 'SubcriptionPlan',
  });
  return SubcriptionPlan;
};