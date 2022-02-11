import React from "react";

import './Day.scss';

import Lesson from "./Lesson/Lesson";

function Day(props) {
	
	const {
		name,
		date,
		lessons
	} = props;
	
	return (
		<div className="timetable__day">
			<div className="timetable__day-header">
				<date className="timetable__day-date">{date}</date>
				<div className="timetable__day-name">{name}</div>
			</div>
			{
				lessons?.map(lesson => {
					return <Lesson name={lesson.name} time={lesson.time} status={lesson.status}/>
				})
			}
		</div>
	);
}

export default Day;