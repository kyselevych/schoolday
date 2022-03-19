const sequelize = require('../db');
const {DataTypes} = require('sequelize');

module.exports = sequelize.define('classroom', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	}
})