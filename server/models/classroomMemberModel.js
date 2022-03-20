const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const User = require('../models/userModel');
const Classroom = require('../models/classroomModel');

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

User.belongsToMany(Classroom, {through: ClassroomMember});
Classroom.belongsToMany(User, {through: ClassroomMember});
ClassroomMember.belongsTo(User);
ClassroomMember.belongsTo(Classroom);

module.exports = ClassroomMember;