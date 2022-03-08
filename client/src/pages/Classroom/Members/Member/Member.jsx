import React from "react";
import './Member.scss';

function Member(props) {
	
	const {
		name,
		isTeacher = false
	} = props;
	
	return (
		<li className="classroom__members-person">
			<span className="classroom__members-person__name">{name}</span>
			{isTeacher && <button className="classroom__members-person__remove-btn">Remove</button>}
		</li>
	);
}

export default Member;