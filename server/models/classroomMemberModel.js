const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const userModel = require('../models/userModel');
const classroomModel = require('../models/classroomModel');

const ClassroomMember = sequelize.define('classroom_member', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	role: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'STUDENT'
	}
})

userModel.belongsToMany(classroomModel, {through: ClassroomMember});
classroomModel.belongsToMany(userModel, {through: ClassroomMember});

module.exports = ClassroomMember;