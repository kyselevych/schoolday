import React from "react";

import Header from "./Header/Header";
import Timetable from "./Timetable/Timetable";
import CreateLesson from "./CreateLesson/CreateLesson";


function Classroom() {
	return (
		<main className="classroom">
			<div className="container">
				<Header />
				<CreateLesson />
			</div>
		</main>
	);
}

export default Classroom;