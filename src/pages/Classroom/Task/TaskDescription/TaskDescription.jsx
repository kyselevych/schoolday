import React from "react";
import './TaskDescription.scss';

function TaskDescription() {
	
	return (
		<article className="container--narrow container--styled-content">
			<div className="layout-flex__space-between__align-center">
				<h2>CSS Technologies</h2>
				<span>15.20 08:30</span>
			</div>
			<p className="task__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid architecto asperiores beatae blanditiis consequuntur dicta dignissimos, dolor error excepturi facilis id modi omnis quo rem veniam voluptatem? Molestias, qui!</p>
		</article>
	);
}

export default TaskDescription;