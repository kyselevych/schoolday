import React from "react";
import {Link} from "react-router-dom";
import './Header.scss';
import useClassroom from "hook/useClassroom";

function Header() {
	const {classroom, userRole} = useClassroom();
	
	return (
		<header className="classroom__header">
			<h2 className="classroom__name-classroom">{classroom.name}</h2>
			<nav className="classroom__nav">
				<Link to={`/classroom/${classroom.id}/members`} className="classroom__nav-item">Members</Link>
				<Link to={`/classroom/${classroom.id}`} className="classroom__nav-item">Timetable</Link>
				{userRole === 'TEACHER' &&
					<Link to={`/classroom/${classroom.id}/settings`}
					      className="classroom__nav-item classroom__nav-item--settings">Settings</Link>
				}
				</nav>
		</header>
	);
}

export default Header;