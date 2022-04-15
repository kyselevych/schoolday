import React from "react";
import './Info.scss';
import moment from "moment";

function Info(props) {
	const {solution} = props;
	
	const formattedDate = moment(solution.date, "YYYY-MM-DD").format("MM.DD");
	const formattedTime = moment(solution.time, "HH:mm:ss").format("HH:mm");
	
	return (
		<article className="container--narrow container--styled-content">
			<div className="layout-flex__space-between__align-center">
				<h2>{solution.user.firstname} {solution.user.lastname}</h2>
				<span>{formattedDate} {formattedTime}</span>
			</div>
			<p className="task__description">{solution.text}</p>
		</article>
	);
}

export default Info;