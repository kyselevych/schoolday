import React, {createContext, useCallback, useEffect, useMemo, useState} from 'react';
import {authUserAPI} from "http/userAPI";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext(null);

function AuthProvider({children}) {
	const [user, setUser] = useState(null);
	const [token, setTokenData] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	
	const setToken = useCallback((token) => {
		setTokenData(token);
		
		if (token) {
			localStorage.setItem('token', token);
		} else {
			localStorage.removeItem('token');
		}
	}, [])
	
	const auth = useCallback(async () => {
		const tokenData = localStorage.getItem('token');
		setTokenData(tokenData);

		try {
			if(tokenData) {
				const response = await authUserAPI(tokenData);
				const data = await response.json();
				const decodedToken = jwtDecode(data.token);
				
				setToken(data.token);
				setUser(decodedToken);
			}
		}
		catch (err) {
			setUser(null);
		}
		finally {
			setIsLoaded(true);
		}

	}, [setToken])
	
	const login = useCallback((token) => {
		try {
			const decodedToken = jwtDecode(token);
			
			setToken(token);
			setUser(decodedToken);
		} catch (err) {
			setUser(null);
			setToken(null);
		}
	}, []);
	
	const logout = useCallback(() => {
		setToken(null);
		setUser(null);
	}, []);
	
	useEffect(() => {
		auth();
	}, [auth])
	
	const contextValue = useMemo(() => ({
		isLoaded,
		user,
		token,
		setToken,
		setUser,
		login,
		logout
	}), [isLoaded, user, token, setToken, setUser, login, logout])

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;