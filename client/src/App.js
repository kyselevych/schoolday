import React from "react";
import 'styles/index.scss';
import AuthProvider from "./hoc/AuthProvider";
import {AppRouter} from "components";

function App() {
    return (
        <div className="app">
	        <AuthProvider>
		        <AppRouter />
	        </AuthProvider>
        </div>
    );
}

export default App;
