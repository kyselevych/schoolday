import React, {useCallback} from "react";
import {NavLink, useOutlet} from "react-router-dom";

import './Tabs.scss';
import {LOGIN_PATH, REGISTER_PATH} from "utils/pathConsts";

function Tabs() {
	
	const outlet = useOutlet();
	
	const setClassName = useCallback(({isActive}) => {
		const activeClass = isActive ? 'tabs__nav-item--active' : '';
		
		return `tabs__nav-item ${activeClass}`;
	}, []);
	
	return (
		<div className="tabs">
			<div className="tabs__nav">
				<NavLink to={LOGIN_PATH} className={setClassName}>Login</NavLink>
				<NavLink to={REGISTER_PATH} className={setClassName}>Registration</NavLink>
			</div>
			<div className="tabs__content-container">
				{outlet}
			</div>
		</div>
	);
}

export default Tabs; 