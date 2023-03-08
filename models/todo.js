'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Todo.init({
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    completeText: {
      type: DataTypes.VIRTUAL,
      get(){
        return this.complete ? 'Complete' : 'Incomplete'
      }
    }
  }, {
    sequelize,
    modelName: 'Todo',
    tableName: 'todo',
    timestamps: false,
  });
  return Todo;
};