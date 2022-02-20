import React from "react";

import Header from "./Header/Header";
import Timetable from "./Timetable/Timetable";
import CreateLesson from "./CreateLesson/CreateLesson";
import Members from "./Members/Members";
import AddMember from "./AddMember/AddMember";


function Classroom() {
	return (
		<main className="classroom">
			<div className="container">
				<Header />
				<AddMember />
			</div>
		</main>
	);
}

export default Classroom;