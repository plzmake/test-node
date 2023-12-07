
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlayList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PlayList.belongsTo(models.User, {foreignKey:'name',targetKey:'namePlayList',as:'Creates'})
    }
  };
  PlayList.init({
    
   name: DataTypes.STRING,
    
    
    length:DataTypes.STRING,
    numberOfSongs:DataTypes.STRING
}, {
    sequelize,
    modelName: 'PlayList',
  });
  return PlayList;
};