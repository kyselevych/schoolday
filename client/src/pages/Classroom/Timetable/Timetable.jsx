import React from "react";

import './Timetable.scss';

import Day from "./Day/Day";

function Timetable() {
	
	// Test array of lessons
	const lessons = [
		{
			name: "CSS technologies",
			time: "08:30",
			status: "done"
		},
		{
			name: "HTML technologies",
			time: "10:25",
			status: "undone"
		},
		{
			name: "JavaScript technologies",
			time: "13:50",
			status: "done"
		},
	];

	return (
		<div className="timetable">
			<div className="timetable__week">
				<Day name="Monday" date="05.20" lessons={lessons}/>
				<Day name="Tuesday" date="05.20" lessons={lessons}/>
				<Day name="Wednesday" date="05.20" lessons={lessons}/>
				<Day name="Thursday" date="05.20" />
				<Day name="Friday" date="05.20" />
				<Day name="Sunday" date="05.20" lessons={lessons}/>
				<Day name="Sunday" date="05.20" lessons={lessons}/>
			</div>
			<div className="timetable__week">
				<Day name="Monday" date="05.20" lessons={lessons}/>
				<Day name="Tuesday" date="05.20" lessons={lessons}/>
				<Day name="Wednesday" date="05.20" lessons={lessons}/>
				<Day name="Thursday" date="05.20" />
				<Day name="Friday" date="05.20" />
				<Day name="Sunday" date="05.20" lessons={lessons}/>
				<Day name="Sunday" date="05.20" lessons={lessons}/>
			</div>
		</div>
	);
}

export default Timetable;