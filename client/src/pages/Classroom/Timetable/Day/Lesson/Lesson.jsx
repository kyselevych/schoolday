import React from "react";

import './Lesson.scss';

import {useNavigate} from "react-router-dom";

function Lesson(props) {
	const navigate = useNavigate();
	const {lesson} = props;
	
	let statusLessonClass = "";
	const statusClassDone = "timetable__lesson--done";
	const statusClassNotDone = "timetable__lesson--undone";
	
	if (lesson.isHomework) {
		switch (lesson.status) {
			case "sent":
			case "rated": {
				statusLessonClass = statusClassDone;
				break;
			}
			case "unsent": {
				statusLessonClass = statusClassNotDone;
				break;
			}
			default: {
				statusLessonClass = "";
			}
		}
	}

	return (
		<div className={"timetable__lesson " + statusLessonClass} onClick={() => navigate(`task/${lesson.id}`)}>
			<time className="timetable__lesson-time">{lesson.time}</time>
			<div className="timetable__lesson-name">{lesson.name}</div>
		</div>
	);
}

export default Lesson;