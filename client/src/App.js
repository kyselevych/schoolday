import React from "react";
import 'styles/index.scss';
import AuthProvider from "hoc/AuthProvider";
import {AppRouter} from "components";
import NotificationProvider from "hoc/NotificationProvider";

function App() {
    return (
        <div className="app">
	        <NotificationProvider>
		        <AuthProvider>
			        <AppRouter />
		        </AuthProvider>
	        </NotificationProvider>
        </div>
    );
}

export default App;
