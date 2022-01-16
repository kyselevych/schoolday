import React, {useState} from "react";

import './Auth.scss'; 
import Tabs from "./Tabs/Tabs";
import ErrorBox from "@components/ErrorBox/ErrorBox";

import SchoolDayLogo from '@assets/icons/schoolDayLogo.svg';

function Auth() {
	const [error, setError] = useState('Error! BAN!');

	return (
		<>
			<div className="auth">
				<div className="auth__content-wrapper">
					<img src={SchoolDayLogo} alt="SchoolDay" className="auth__logo"/>
					<Tabs />
				</div>
			</div>
			{error && <ErrorBox resetError={setError} textError={error} />}
		</>
	);
}

export default Auth;