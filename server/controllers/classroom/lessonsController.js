const Op = require('sequelize').Op;
const moment = require('moment');

const ClassroomLesson = require('../../models/classroomLessonModel');
const ClassroomSolution = require('../../models/classroomSolutionModel');
const ApiError = require("../../error/ApiError");
const generateDaysWithLessons = require("../../utils/generateDaysWithLessons");
const putUserSolutionStatusToLesson = require("../../utils/putUserSolutionStatusToLesson");

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
	
	async getDaysList(req, res, next) {
		const startDate = moment(req.body.startDate, 'YYYY-MM-DD', true);
		const endDate = moment(req.body.endDate, 'YYYY-MM-DD', true);
		
		const isValidStartDate = startDate.isValid();
		const isValidEndDate = endDate.isValid();
		
		if (!isValidStartDate || !isValidEndDate) {
			return next(ApiError.badRequest('Invalid format of dates'));
		}
		
		const startDateFormatted = startDate.format('YYYY-MM-DD');
		const endDateFormatted = endDate.format('YYYY-MM-DD');
		
		try {
			let lessons = await ClassroomLesson.findAll({
				order: ['time'],
				where: {
					date: {
						[Op.between]: [startDateFormatted, endDateFormatted]
					},
					classroomId: req.params.id
				}
			});
			
			const solutions = await ClassroomSolution.findAll({
				where: {
					lessonId: {
						[Op.or]: lessons.map(lesson => lesson.id)
					},
					userId: req.user.id
				}
			})
			
			putUserSolutionStatusToLesson(lessons, solutions);

			const formattedDays = await generateDaysWithLessons(startDate, endDate, lessons);
			
			return res.json(formattedDays);
		} catch (err) {
			console.log(err);
			return next(ApiError.badRequest('Error loading'));
		}
	}
	
	async getLesson(req, res, next) {
		const lesson = req.lesson;
		
		return res.json({lesson});
	}
	
	async deleteLesson(req, res, next) {
		const lesson = req.lesson;
		
		try {
			await lesson.destroy();
			
			return res.json({message: "Lesson successful deleted"});
		} catch (e) {
			console.log(e);
		}
	}
	
	async updateLesson(req, res, next) {
		const lesson = req.lesson;
		
		const {
			name,
			date,
			time,
			description,
			isHomework
		} = req.body;
		
		lesson.update({
			name,
			date,
			time,
			description,
			isHomework
		});
		
		return res.json({message: "Lesson successful updated"});
	}
}

module.exports = new LessonsController();