import React from "react";

import './Day.scss';

import Lesson from "./Lesson/Lesson";
import useClassroom from "hook/useClassroom";
import {useNavigate} from "react-router-dom";

function Day(props) {
	const navigate = useNavigate();
	const {userRole} = useClassroom();
	
	const {day} = props;
	
	return (
		<div className="timetable__day">
			<div className="timetable__day-header">
				<div className="timetable__day-date">{day.shortDate}</div>
				<div className="timetable__day-name">{day.name}</div>
			</div>
			{
				day.lessons?.map(lesson => {
					return <Lesson key={day.date} lesson={lesson}/>
				})
			}
			{
				userRole === "TEACHER" &&
				<div
					className="timetable__add-lesson"
					onClick={() => navigate(`create-lesson/${day.date}`)}
				>Add lesson</div>
			}
		</div>
	);
}

export default Day;