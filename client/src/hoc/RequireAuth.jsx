import React from 'react';
import {Navigate} from "react-router-dom";
import useAuth from "../hook/useAuth";

function RequireAuth({children}){
	const {user, isLoaded} = useAuth();
	
	if (!isLoaded) {
		return <div>LOADING...</div>;
	}
	
	if (!user) {
		return <Navigate to="/login" />;
	}
	
	return children;
}

export default RequireAuth;