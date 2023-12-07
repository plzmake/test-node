'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.PlayList, {foreignKey:'name',as:'Creates'})
    }
  };
  User.init({
    
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth:DataTypes.DATE,
    address : DataTypes.STRING,
    phonenumber:DataTypes.STRING,
    gender:DataTypes.STRING,
    image:DataTypes.STRING,
    roleId:DataTypes.STRING,// phan biet user  va artist
    numberOfFollower:DataTypes.STRING,
    numberOfFollowing:DataTypes.STRING,
    namePlayList:DataTypes.STRING// vì không biết dùng thuộc tính nào để truyền cho quan hệ với Playlist nên tạo cái này
   
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};