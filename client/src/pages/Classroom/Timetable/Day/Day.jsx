import React from "react";
import {motion} from "framer-motion/dist/framer-motion";

import './Day.scss';

import Lesson from "./Lesson/Lesson";
import useClassroom from "hook/useClassroom";
import {useNavigate} from "react-router-dom";


function Day(props) {
	const navigate = useNavigate();
	const {userRole} = useClassroom();
	
	const {day, animations, custom} = props;
	
	return (
		<motion.div
			variants={animations}
			className="timetable__day"
			initial="hidden"
			animate="visible"
			custom={custom}
		>
			<div className="timetable__day-header">
				<div className="timetable__day-date">{day.shortDate}</div>
				<div className="timetable__day-name">{day.name}</div>
			</div>
			{
				day.lessons?.map(lesson => {
					return <Lesson key={day.date} lesson={lesson}/>
				})
			}
			{
				userRole === "TEACHER" &&
				<div
					className="timetable__add-lesson"
					onClick={() => navigate(`create-lesson/${day.date}`)}
				>Add lesson</div>
			}
		</motion.div>
	);
}

export default Day;