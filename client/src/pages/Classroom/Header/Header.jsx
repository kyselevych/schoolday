import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ClassroomContext} from '../Classroom';
import './Header.scss';

function Header() {
	const classroomParams = useContext(ClassroomContext);
	
	return (
		<header className="classroom__header">
			<h2 className="classroom__name-classroom">{classroomParams.name}</h2>
			<nav className="classroom__nav">
				<Link to={`/classroom/${classroomParams.id}/members`} className="classroom__nav-item">Members</Link>
				<Link to={`/classroom/${classroomParams.id}`} className="classroom__nav-item">Timetable</Link>
				<Link to={`/classroom/${classroomParams.id}/settings`} className="classroom__nav-item classroom__nav-item--settings">Settings</Link>
			</nav>
		</header>
	);
}

export default Header;