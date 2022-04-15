import React, {useEffect, useState} from "react";
import './TaskReview.scss';

import {ButtonGoBack} from "components";
import Grade from "./Grade/Grade";
import Info from "./Info/Info";
import useClassroom from "hook/useClassroom";
import useNotification from "hook/useNotification";
import {useNavigate, useParams} from "react-router-dom";
import {CLASSROOMS_PATH} from "utils/pathConsts";
import {getSolutionAPI} from "http/classroomAPI";
import useAuth from "hook/useAuth";

function TaskReview() {
	const {userRole, classroomId} = useClassroom();
	const {notification} = useNotification();
	const {token} = useAuth();
	const {taskId, solutionId} = useParams();
	const navigate = useNavigate();
	
	const [solution, setSolution] = useState(null);
	
	const loadSolution = async () => {
		const response = await getSolutionAPI(token, classroomId, taskId, solutionId);
		const data = await response.json();
		const solution = data.solution;
		
		if (response.status === 200) {
			setSolution(solution);
			console.log(solution)
			return;
		}
		
		navigate(CLASSROOMS_PATH);
		notification(data.message || 'Unknown error', 'negative');
	};
	
	useEffect(() => {
		loadSolution();
	}, [])
	
	if (!solution) return "Loading..";
	if (userRole !== "TEACHER") {
		navigate(CLASSROOMS_PATH);
		notification("You are not teacher", 'negative');
		return;
	}
	
	return (
		<>
			<div className="container--narrow">
				<ButtonGoBack/>
			</div>
			<Info solution={solution}/>
			<Grade/>
		</>
	);
}

export default TaskReview;