import React from "react";

import Header from "./Header/Header";
import Timetable from "./Timetable/Timetable";
import CreateLesson from "./CreateLesson/CreateLesson";
import Members from "./Members/Members";
import AddMember from "./AddMember/AddMember";
import Settings from "./Settings/Settings";
import Task from "./Task/Task";
import TaskReview from "./TaskReview/TaskReview";


function Classroom() {
	return (
		<main className="classroom">
			<div className="container">
				<Header />
				<TaskReview />
			</div>
		</main>
	);
}

export default Classroom;