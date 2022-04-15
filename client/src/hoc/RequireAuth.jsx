import React from 'react';
import {Navigate} from "react-router-dom";
import useAuth from "hook/useAuth";
import {LOGIN_PATH} from "utils/pathConsts";
import {Loading} from "components";

function RequireAuth({children}){
	const {user, isLoaded} = useAuth();
	
	if (!isLoaded) {
		return <Loading/>;
	}
	
	if (!user) {
		return <Navigate to={LOGIN_PATH} />;
	}
	
	return children;
}

export default RequireAuth;