const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const Classroom = require('../models/classroomModel');

const ClassroomLesson = sequelize.define('classroom_lesson', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	date: {
		type: DataTypes.DATEONLY,
		allowNull: false
	},
	time: {
		type: DataTypes.TIME,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT
	},
	isHomework: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
		allowNull: false
	}
})

Classroom.hasOne(ClassroomLesson);
ClassroomLesson.belongsTo(Classroom);

module.exports = ClassroomLesson;