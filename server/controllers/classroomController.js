const Classroom = require('../models/classroomModel');

class ClassroomController {
	async createClassroom(req, res, next) {
		const classroom = await Classroom.create({
			name: req.body.name
		})
		
		return res.json({message: `Classroom ${classroom.name} successful created`});
	}
}

module.exports = new ClassroomController();