import React from "react";
import './TaskDescription.scss';
import moment from "moment";

function TaskDescription(props) {
	const {lesson} = props;
	
	return (
		<article className="container--narrow container--styled-content">
			<div className="layout-flex__space-between__align-center">
				<h2>{lesson.name}</h2>
				<span>{moment(lesson.date, "YYYY-MM-DD").format("YYYY.MM.DD")} {lesson.time}</span>
			</div>
			<p className="task__description">{lesson.description}</p>
		</article>
	);
}

export default TaskDescription;