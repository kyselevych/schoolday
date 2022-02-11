import React from "react";

import Header from "./Header/Header";
import Timetable from "./Timetable/Timetable";

function Classroom() {
	return (
		<main className="classroom">
			<div className="container">
				<Header />
				<Timetable />
			</div>
		</main>
	);
}

export default Classroom;