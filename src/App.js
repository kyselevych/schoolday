import React from "react";
import '@styles/index.scss';

import {Header} from './components';
import {Classrooms, Classroom} from './pages';
 
function App() {
    return (
        <div className="app">
            <Header/>
            <Classroom />
        </div>
    );
}

export default App;
