import React, {useCallback} from "react";
import {NavLink, useOutlet} from "react-router-dom";
import {motion} from "framer-motion/dist/framer-motion";

import './Tabs.scss';
import {LOGIN_PATH, REGISTER_PATH} from "utils/pathConsts";

function Tabs() {
	const tabsVariants = {
		hidden: {
			opacity: 0,
			y: 100
		},
		visible: {
			opacity: 1,
			y: 0
		}
	};
	const outlet = useOutlet();
	const setClassName = useCallback(({isActive}) => {
		const activeClass = isActive ? 'tabs__nav-item--active' : '';
		
		return `tabs__nav-item ${activeClass}`;
	}, []);
	
	return (
		<motion.div
			className="tabs"
			variants={tabsVariants}
			initial="hidden"
			animate="visible"
			transition={{
				delay: 0.3,
				duration: 0.7
			}}
		>
			<div className="tabs__nav">
				<NavLink to={LOGIN_PATH} className={setClassName}>Login</NavLink>
				<NavLink to={REGISTER_PATH} className={setClassName}>Registration</NavLink>
			</div>
			<div className="tabs__content-container">
				{outlet}
			</div>
		</motion.div>
	);
}

export default Tabs; 