import React, {useEffect} from 'react';
import {motion} from "framer-motion/dist/framer-motion";
import './Notification.scss';

const animations = {
	initial: {
		opacity: 0,
		y: 200
	},
	animate: {
		opacity: 1,
		y: 0
	},
	exit: {
		opacity: 0,
		y: 200
	}
};

function Notification(props) {
	const delay = 3000;
	const {type, closeNotification, children} = props;

	useEffect(() => {
		const timeoutReset = setTimeout(() => {
			closeNotification();
		}, delay);

		return function cleanup() {
			clearTimeout(timeoutReset);
		}
	}, []);
	
	let activeClassName;
	
	switch (type) {
		case 'positive': {
			activeClassName = 'notification--positive';
			break;
		}
		case 'negative': {
			activeClassName = 'notification--negative';
			break;
		}
		default: {
			activeClassName = 'notification--positive';
			break;
		}
	}

	return (
		<motion.div
			className={`notification ${activeClassName}`}
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.5 }}
		>
			<div className="notification__text" onClick={closeNotification}>
				{children}
			</div>
			<div className="notification__line">
				<div className="notification__line-active" />
			</div>
		</motion.div>
	);
}

export default Notification;