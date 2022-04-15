import React from "react";
import {motion} from "framer-motion/dist/framer-motion";
import './Member.scss';

function Member(props) {
	const {person, removeMember, isTeacher, custom} = props;

	const animations = {
		visible: i => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.1 * i
			}
		}),
		hidden: {
			opacity: 0,
			x: -10
		}
	};
	
	return (
		<motion.li
			className="classroom__members-person"
			variants={animations}
			animate="visible"
			initial="hidden"
			custom={custom}
			transition={{ duration: 0.2 }}
		>
			<span className="classroom__members-person__name">{person.firstname} {person.lastname}</span>
			{isTeacher &&
				<button
					className="classroom__members-person__remove-btn"
					onClick={() => {removeMember(person.email)}}
				>Remove</button>
			}
		</motion.li >
	);
}

export default Member;