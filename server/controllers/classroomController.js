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
}

module.exports = new ClassroomController();