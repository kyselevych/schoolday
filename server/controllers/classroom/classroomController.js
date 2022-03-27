const Classroom = require('../../models/classroomModel');
const ClassroomMember = require('../../models/classroomMemberModel');
const ApiError = require("../../error/ApiError");

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
	
	async getClassroom(req, res, next) {
		const classroomId = req.params.id;
		const userRole = req.user.role;
		
		try {
			const classroom = await Classroom.findOne({
				attributes: ['id', 'name'],
				where: {
					id: classroomId
				}
			})
			
			if (!classroom) {
				return next(ApiError.forbidden('Classroom is not found'));
			}
			if (!userRole) {
				return next(ApiError.forbidden('User role in classroom is undefined'));
			}
			
			return res.json({classroom, userRole});
		} catch (err) {
			return next(ApiError.forbidden('Classroom is not found'));
		}
	}
	
	async getClassroomsByUserId(req, res, next) {
		const listClassrooms =  await ClassroomMember.findAll({
			attributes: [],
			where: {
				userId: req.user.id
			},
			include: {
				model: Classroom,
				attributes: ['id', 'name']
			}
		});
		
		return res.json({listClassrooms})
	}
}

module.exports = new ClassroomController();