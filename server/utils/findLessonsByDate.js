function findLessonsByDate(formattedIterableDate, lessonsList) {
	return lessonsList.filter(lesson => {
		return lesson.date === formattedIterableDate;
	})
}

module.exports = findLessonsByDate;