import React from "react";
import './TaskReview.scss';

import {ButtonGoBack} from "components";
import Grade from "./Grade/Grade";
import Info from "./Info/Info";

function TaskReview() {
	
	return (
		<>
			<div className="container--narrow">
				<ButtonGoBack />
			</div>
			<Info />
			<Grade />
		</>
	);
}

export default TaskReview;