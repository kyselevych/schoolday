const findLessonsByDate = require("./findLessonsByDate");

async function generateDaysWithLessons(startDate, endDate, lessonsList) {
	const iterableDate = startDate.clone();
	const daysList = [];

	while (iterableDate.diff(endDate, 'days') <= 0) {
		const formattedIterableDate = iterableDate.format('YYYY-MM-DD');
		
		daysList.push({
			date: iterableDate.format('YYYY-MM-DD'),
			shortDate: iterableDate.format('MM.DD'),
			name: iterableDate.format('dddd'),
			lessons: findLessonsByDate(formattedIterableDate, lessonsList)
		})
		
		iterableDate.add(1, 'day');
	}
	
	return daysList;
}

module.exports = generateDaysWithLessons;