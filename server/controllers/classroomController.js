const Classroom = require('../models/classroomModel');
const ClassroomMember = require('../models/classroomMemberModel');
const User = require('../models/userModel');
const ApiError = require("../error/ApiError");

const getClassroomMember = require('../utils/getClassroomMember');

class ClassroomController {
	async createClassroom(req, res, next) {
		
		// Create classroom
		
		const classroom = await Classroom.create({
			name: req.body.name
		})
		
		// Add user creator to members how TEACHER
		
		const classroomMember = await ClassroomMember.create({
			userId: req.user.id,
			classroomId: classroom.id,
			role: 'TEACHER'
		})
		
		return res.json({message: `Classroom ${classroom.name} successful created`});
	}
	
	async getSettings(req, res, next) {
		const classroom = await Classroom.findOne({
			where: {id: req.params.id}
		})
		
		return res.json({
			fields: {
				field: {
					title: "Classroom title",
					field: classroom.name
				}
			}
		})
	}
	
	async setSettings(req, res, next) {
		const classroom = await Classroom.findOne({
			where: {id: req.params.id}
		})
		
		classroom.update({
			name: req.body.fields.name,
			where: {
				id: req.params.id
			}
		})
		
		return res.json({message: "Successfully update settings"});
	}
	
	async addMember(req, res, next) {
		const candidate = await User.findOne({where: {
			email: req.body.email
		}});

		if (!candidate) {
			return next(ApiError.forbidden('User does not exist'));
		}
		
		const candidateIsMemberClassroom = await getClassroomMember(candidate.id, req.params.id);
		
		if (candidateIsMemberClassroom) {
			return next(ApiError.forbidden('The user is already a member of the class'));
		}
		
		await ClassroomMember.create({
			"userId": candidate.id,
			"classroomId": req.params.id,
			"role": req.body.role
		})
		
		return res.json({message: 'User successfully added to classroom'});
	}
	
	async removeMember(req, res, next) {
		const candidate = await User.findOne({where: {
				email: req.body.email
		}});
		
		if (!candidate) {
			return next(ApiError.forbidden('User does not exist'));
		}
		if (candidate.id === req.user.id) {
			return next(ApiError.forbidden("You can't remove yourself"));
		}
		
		const candidateIsMemberClassroom = await getClassroomMember(candidate.id, req.params.id);
		
		if (!candidateIsMemberClassroom) {
			return next(ApiError.forbidden('The user is not a member of the class'));
		}
		
		await ClassroomMember.destroy({
			where: {
				"userId": candidate.id,
				"classroomId": req.params.id
			}
		})
		
		return res.json({message: 'User successfully removed from classroom'});
	}
	
	async getMembers(req, res, next) {
		const teachers = await ClassroomMember.findAll({
			attributes: [],
			where: {
				classroomId: req.params.id,
				role: "TEACHER"
			},
			include: [{
				model: User,
				attributes: ['id', 'firstname', 'lastname']
			}]
		})
		
		const students = await ClassroomMember.findAll({
			attributes: [],
			where: {
				classroomId: req.params.id,
				role: "STUDENT"
			},
			include: [{
				model: User,
				attributes: ['id', 'firstname', 'lastname']
			}]
		})

		
		return res.json({
			"teachers": teachers,
			"students": students
		});
	}
}

module.exports = new ClassroomController();