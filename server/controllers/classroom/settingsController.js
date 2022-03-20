const Classroom = require('../../models/classroomModel');

class SettingsController {
	async getSettings(req, res, next) {
		const classroom = await Classroom.findOne({
			where: {id: req.params.id}
		})
		
		return res.json({
			fields: {
				name: {
					title: "Classroom title"
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
}

module.exports = new SettingsController();