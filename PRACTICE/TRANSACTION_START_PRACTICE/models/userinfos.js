'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInfos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // 1. UserInfos 모델에서
      this.belongsTo(models.Users, { // 2. Users 모델에게 1:1 관계 설정을 합니다.
        targetKey: 'userId', // 3. Users 모델의 userId 컬럼을
        foreignKey: 'UserId', // 4. UserInfos 모델의 UserId 컬럼과 연결합니다.
      });
    }
  }

  UserInfos.init(
    {
      userInfoId: {
        allowNull: false, // NOT NULL
        autoIncrement: true, // AUTO_INCREMENT
        primaryKey: true, // Primary Key (기본키)
        type: DataTypes.INTEGER,
      },
      UserId: {
        allowNull: false, // NOT NULL
        type: DataTypes.INTEGER,
        unique: true, // UNIQUE
      },
      name: {
        allowNull: false, // NOT NULL
        type: DataTypes.STRING,
      },
      age: {
        allowNull: false, // NOT NULL
        type: DataTypes.INTEGER,
      },
      gender: {
        allowNull: false, // NOT NULL
        type: DataTypes.STRING,
      },
      profileImage: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'UserInfos',
    }
  );
  return UserInfos;
};
