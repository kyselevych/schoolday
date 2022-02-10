import React from "react";
import './Header.scss';

function Header() {
	return (
		<header className="classroom__header">
			<h2 className="classroom__name-classroom">ISM Software courses</h2>
			<ul className="classroom__nav">
				<li className="classroom__nav-item">Members</li>
				<li className="classroom__nav-item">Timetable</li>
				<li className="classroom__nav-item classroom__nav-item--settings">Settings</li>
			</ul>
		</header>
	);
}

export default Header;