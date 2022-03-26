const Classroom = require('../../models/classroomModel');
const ClassroomMember = require('../../models/classroomMemberModel');

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