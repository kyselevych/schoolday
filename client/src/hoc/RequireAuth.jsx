import React from 'react';
import {Navigate} from "react-router-dom";
import useAuth from "hook/useAuth";
import {LOGIN_PATH} from "utils/pathConsts";

function RequireAuth({children}){
	const {user, isLoaded} = useAuth();
	
	if (!isLoaded) {
		return <div>LOADING...</div>;
	}
	
	if (!user) {
		return <Navigate to={LOGIN_PATH} />;
	}
	
	return children;
}

export default RequireAuth;