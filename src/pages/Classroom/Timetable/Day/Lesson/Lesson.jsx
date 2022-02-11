import React from "react";

import './Lesson.scss';

function Lesson(props) {
	
	const {
		time,
		name,
		status
	} = props;
	
	let statusLessonClass = "";
	const statusClassDone = "timetable__lesson--done";
	const statusClassNotDone = "timetable__lesson--undone";

	switch (status) {
		case "done": {
			statusLessonClass = statusClassDone;
			break;
		}
		case "undone": {
			statusLessonClass = statusClassNotDone;
			break;
		}
		default: {
			statusLessonClass = "";
		}
	}

	return (
		<div className={"timetable__lesson" + " " + statusLessonClass}>
			<time className="timetable__lesson-time">{time}</time>
			<div className="timetable__lesson-name">{name}</div>
		</div>
	);
}

export default Lesson;