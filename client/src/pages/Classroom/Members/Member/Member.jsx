import React, {useCallback} from "react";
import './Member.scss';
import {removeMemberAPI} from "http/classroomAPI";
import {notification} from "components";
import useAuth from "hook/useAuth";
import useClassroom from "hook/useClassroom";

function Member(props) {
	const {person} = props;
	
	/*
	const {token} = useAuth();
	const {classroomId} = useClassroom();
	
	const removeMember = useCallback(async (email) => {
		const response = await removeMemberAPI(token, classroomId, email);
		
		if (response.status === 200) {
			//await loadMembers();
			notification('User successfully removed');
			
			return;
		}
		
		const data = await response.json();
		
		notification(data.message || 'Unknown error');
		
		
	}, []);
	*/
	
	
	return (
		<li className="classroom__members-person">
			<span className="classroom__members-person__name">{person.firstname} {person.lastname}</span>
			{/*isTeacher &&
				<button
					className="classroom__members-person__remove-btn"
					onClick={() => {removeMember(person.email)}}
				>Remove</button>
			*/}
		</li>
	);
}

export default Member;