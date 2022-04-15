import React, {useEffect, useState} from "react";
import './Task.scss';

import TaskForm from "./TaskForm/TaskForm";
import TaskDescription from "./TaskDescription/TaskDescription";
import StudentsList from "./StudentsList/StudentsList";

import {ButtonGoBack} from "components";
import useClassroom from "hook/useClassroom";
import useNotification from "hook/useNotification";
import {getLessonAPI} from "http/classroomAPI";
import {useNavigate, useParams} from "react-router-dom";
import useAuth from "hook/useAuth";
import {CLASSROOMS_PATH} from "utils/pathConsts";

function Task() {
	const {notification} = useNotification();
	const {classroomId, userRole} = useClassroom();
	const {token} = useAuth();
	const params = useParams();
	const navigate = useNavigate();
	
	const [lesson, setLesson] = useState(null);
	const [isOpenTaskForm, setIsOpenTaskForm] = useState(false);
	
	const loadLesson = async () => {
		const response = await getLessonAPI(token, classroomId, params.taskId);
		const data = await response.json();
		const lesson = data.lesson;
		
		if (response.status === 200) {
			setLesson(lesson);
			
			if (userRole === "TEACHER") return;
			if (lesson.isHomework) setIsOpenTaskForm(true);
			
			return;
		}
		
		navigate(CLASSROOMS_PATH);
		notification(data.message || 'Unknown error', 'negative');
		
		return lesson;
	}
	
	useEffect(() => {
		loadLesson();
	}, [])
	
	if (!lesson) return "Loading...";
	
	return (
		<>
			<div className="container--narrow">
				<ButtonGoBack/>
			</div>
			<TaskDescription lesson={lesson}/>
			{isOpenTaskForm && <TaskForm />}
			<StudentsList/>
		</>
	);
}

export default Task;