import React, {useCallback, useEffect, useState} from "react";
import './Members.scss';

import {ButtonAdd, notification} from "components";
import Member from "./Member/Member";
import {getMembersAPI, removeMemberAPI} from "http/classroomAPI";
import useAuth from "hook/useAuth";
import useClassroom from "hook/useClassroom";

function Members() {
	const [teachersList, setTeachersList] = useState(null);
	const [studentsList, setStudentsList] = useState(null);
	
	const {token} = useAuth();
	const {classroomId, userRole} = useClassroom();
	
	const removeMember = async (email) => {
		const response = await removeMemberAPI(token, classroomId, email);
		const data = await response.json();
		
		if (response.status === 200) {
			
			notification('User successfully removed')
			return;
		}
		
		notification(data.message || 'Unknown error', 'negative');
	};

	const loadMembers = useCallback(async () => {
		const response = await getMembersAPI(token, classroomId);
		const data = await response.json();
		
		if (response.status === 200) {
			setTeachersList(data.teachers);
			setStudentsList(data.students);
			return;
		}

		notification(data.message || 'Unknown error', 'negative');

	}, []);
	
	useEffect(() => {
		loadMembers();
	}, [loadMembers])

	return (
		<>
			{ userRole === "TEACHER" &&
				<div className="container--narrow">
					<ButtonAdd className="classroom__members__button-add" to="../add-member">Add member</ButtonAdd>
				</div>
			}
			<section className="container--narrow container--styled-content">
				<article className="classroom__members">
					<h2>Students</h2>
					<ul className="classroom__members-list">
						{
							studentsList?.map(person => {
								person = person.user;
								console.log(person)
								return (
									<Member
										key={person.id}
										person={person}
										isTeacher={userRole === "TEACHER"}
										removeMember={removeMember}
										loadMembers={loadMembers}
									/>
								)
							})
						}
					</ul>
				</article>
				<article className="classroom__members">
					<h2>Teachers</h2>
					<ul className="classroom__members-list">
						{
							teachersList?.map(person => {
								person = person.user;
								return <Member key={person.id} person={person}/>;
							})
						}
					</ul>
				</article>
				
			</section>
		</>
	);
}

export default Members;