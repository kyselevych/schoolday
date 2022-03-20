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
}

module.exports = new ClassroomController();