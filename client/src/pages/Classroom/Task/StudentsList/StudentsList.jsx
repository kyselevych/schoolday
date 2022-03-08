import React from "react";
import './StudentsList.scss';

function StudentsList(props) {
	const {
		students
	} = props;
	
	function getInfoStudent(student) {
		switch (student.status) {
			case "sent": {
				return (
					<div className="student-task-list__info">
						<span className="student-task-list__info-date">{student.dateSend} {student.timeSend}</span>
						<span className="student-task-list__info-grade">Sent by</span>
					</div>
				);
			}
			case "rated": {
				return (
					<div className="student-task-list__info">
						<span className="student-task-list__info-date">{student.dateSend} {student.timeSend}</span>
						<span className="student-task-list__info-grade">{student.grade} / 100</span>
					</div>
				);
			}
			default: {
				return null;
			}
		}
	}

	return (
		<article className="container--narrow container--styled-content student-task-page">
			<h2>Students</h2>
			<ul className="student-task-list">
				{
					students.map(student => {
						return (
							<li className="student-task-list__item layout-flex__space-between__align-center">
								<span className="student-task-list__name">{student.name}</span>
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