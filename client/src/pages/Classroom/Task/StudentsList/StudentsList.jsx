import React, {useEffect, useState} from "react";
import './StudentsList.scss';
import {getSolutionsListAPI} from "http/classroomAPI";
import useNotification from "hook/useNotification";
import useAuth from "hook/useAuth";
import useClassroom from "hook/useClassroom";
import {useNavigate, useParams} from "react-router-dom";
import moment from "moment";

function StudentsList() {
	const {notification} = useNotification();
	const {token} = useAuth();
	const {classroomId, userRole} = useClassroom();
	const {taskId} = useParams();
	const navigate = useNavigate();
	
	const [studentsList, setStudentList] = useState(null);
	
	function getInfoStudent(student) {
		const formattedDate = moment(student.date, "YYYY-MM-DD").format("YYYY.MM.DD");
		const formattedTime = moment(student.time, "HH:mm:ss").format("HH:mm");

		switch (student.status) {
			
			case "sent": {
				return (
					<div className="student-task-list__info">
						<span className="student-task-list__info-date">{formattedDate} {formattedTime}</span>
						<span className="student-task-list__info-grade">Sent by</span>
					</div>
				);
			}
			case "rated": {
				return (
					<div className="student-task-list__info">
						<span className="student-task-list__info-date">{formattedDate} {formattedTime}</span>
						<span className="student-task-list__info-grade">{student.grade} / 100</span>
					</div>
				);
			}
			default: {
				return null;
			}
		}
	}
	
	async function loadStudents() {
		const response = await getSolutionsListAPI(token, classroomId, taskId);
		const data = await response.json();
		const listSolutions = data.listSolutions;
		
		if (response.status === 200) {
			setStudentList(listSolutions);
			return;
		}
		
		notification(data.message || 'Unknown error', 'negative');
	}
	
	function routeToReviewTask() {
		navigate('review');
	}
	
	useEffect(() => {
		loadStudents();
	}, []);

	return (
		<article className="container--narrow container--styled-content student-task-page">
			<h2>Students</h2>
			<ul className="student-task-list">
				{
					studentsList?.map(student => {
						return (
							<li
								className="student-task-list__item layout-flex__space-between__align-center"
								onClick={userRole === "TEACHER" ? routeToReviewTask : null}
								key={student.user.id}
							>
								<span className="student-task-list__name">{student.user.firstname} {student.user.lastname}</span>
								{getInfoStudent(student)}
							</li>
						);
					})
				}
			</ul>
		</article>
	);
}

export default StudentsList;