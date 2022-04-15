import React from "react";
import 'styles/index.scss';
import AuthProvider from "hoc/AuthProvider";
import {AppRouter} from "components";
import NotificationProvider from "hoc/NotificationProvider";
import {AnimatePresence} from "framer-motion/dist/framer-motion";

function App() {
    return (
        <div className="app">
	        <NotificationProvider>
		        <AuthProvider>
			        <AnimatePresence exitBeforeEnter>
				        <AppRouter />
			        </AnimatePresence>
		        </AuthProvider>
	        </NotificationProvider>
        </div>
    );
}

export default App;
