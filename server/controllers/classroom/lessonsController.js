const Op = require('sequelize').Op;
const moment = require('moment');

const ClassroomLesson = require('../../models/classroomLessonModel');
const ApiError = require("../../error/ApiError");


class LessonsController {
	async createLesson(req, res) {
		const {
			name,
			date,
			time,
			description,
			isHomework
		} = req.body;
		
		const lesson = await ClassroomLesson.create({
			name,
			date,
			time,
			description,
			isHomework,
			classroomId: req.params.id
		})
		
		return res.json({message: `Lesson ${name} successful created`});
	}
	
	async getLessons(req, res, next) {
		const startDate = req.body.startDate;
		const endDate = req.body.endDate;
		
		const isValidStartDate = moment(startDate, 'YYYY-MM-DD', true).isValid();
		const isValidEndDate = moment(endDate, 'YYYY-MM-DD', true).isValid();
		
		if (!isValidStartDate || !isValidEndDate) {
			return next(ApiError.badRequest('Invalid format of dates'));
		}
		
		const lessons = await ClassroomLesson.findAll({
			where: {
				date: {
					[Op.between]: [startDate, endDate]
				}
			}
		});
		
		return res.json({lessons});
	}
}

module.exports = new LessonsController();