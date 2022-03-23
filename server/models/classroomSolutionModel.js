const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const Classroom = require('../models/ClassroomModel');
const ClassroomLesson = require('../models/ClassroomLessonModel');
const User = require('../models/userModel');

const ClassroomSolution = sequelize.define('classroom_solution', {
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
	text: {
		type: DataTypes.TEXT
	},
	status: {
		type: DataTypes.STRING,
		defaultValue: "unsent",
		allowNull: false
	},
	grade: {
		type: DataTypes.INTEGER
	}
}, {timestamps: false})

ClassroomLesson.hasOne(ClassroomSolution, {as: 'lesson'});
ClassroomSolution.belongsTo(ClassroomLesson, {as: 'lesson'});

User.hasOne(ClassroomSolution);
ClassroomSolution.belongsTo(User);

Classroom.hasOne(ClassroomSolution);
ClassroomSolution.belongsTo(Classroom);


module.exports = ClassroomSolution;