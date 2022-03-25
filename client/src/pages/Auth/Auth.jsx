import React from "react";

import './Auth.scss'; 
import Tabs from "./Tabs/Tabs";

import SchoolDayLogo from 'assets/icons/schoolDayLogo.svg';

function Auth() {
	return (
		<>
			<div className="auth">
				<div className="auth__content-wrapper">
					<img src={SchoolDayLogo} alt="SchoolDay" className="auth__logo"/>
					<Tabs />
				</div>
			</div>
		</>
	);
}

export default Auth;