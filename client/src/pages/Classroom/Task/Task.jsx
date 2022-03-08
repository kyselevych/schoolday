import React from "react";
import './Task.scss';

import TaskForm from "./TaskForm/TaskForm";
import TaskDescription from "./TaskDescription/TaskDescription";
import StudentsList from "./StudentsList/StudentsList";

import {ButtonGoBack} from "@components";

function Task() {
	
	const students = [
		{
			name: "John Lehnon",
			grade: 80,
			dateSend: "20.05.2022",
			timeSend: "15:30",
			status: "sent"
		},
		{
			name: "David Gilmor",
			grade: 40,
			dateSend: "12.02.2022",
			timeSend: "12:31",
			status: "rated"
		},
		{
			name: "Kurt Cobain",
			grade: 73,
			dateSend: "21.10.2022",
			timeSend: "13:55",
			status: "unsent"
		},
	]
	
	return (
		<>
			<div className="container--narrow">
				<ButtonGoBack />
			</div>
			<TaskDescription />
			<TaskForm />
			<StudentsList students={students}/>
		</>
	);
}

export default Task;