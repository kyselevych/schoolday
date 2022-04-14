import React from "react";
import './Member.scss';
import useClassroom from "hook/useClassroom";
import useAuth from "hook/useAuth";

function Member(props) {
	const {person, removeMember, isTeacher} = props;
	
	return (
		<li className="classroom__members-person">
			<span className="classroom__members-person__name">{person.firstname} {person.lastname}</span>
			{isTeacher &&
				<button
					className="classroom__members-person__remove-btn"
					onClick={() => {removeMember(person.email)}}
				>Remove</button>
			}
		</li>
	);
}

export default Member;