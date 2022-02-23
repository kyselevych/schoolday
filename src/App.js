import React from "react";
import '@styles/index.scss';

import {Header} from './components';
import {Classrooms, Classroom, Auth} from './pages';
 
function App() {
    return (
        <div className="app">
            <Header/>
            <Classroom />
	        {/*<Auth />*/}
        </div>
    );
}

export default App;
