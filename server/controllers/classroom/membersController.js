const User = require('../../models/userModel');
const ClassroomMember = require('../../models/classroomMemberModel');

const ApiError = require("../../error/ApiError");

const getClassroomMember = require('../../utils/getClassroomMember');

class MembersController {
	
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
		try {
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
		catch (err) {
			console.log(err);
			return next(ApiError.forbidden("Error"));
		}
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
				attributes: ['id', 'firstname', 'lastname', 'email']
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
				attributes: ['id', 'firstname', 'lastname', 'email']
			}]
		})

		return res.json({
			"teachers": teachers,
			"students": students
		});
	}
}

module.exports = new MembersController();