import React from "react";
import '@styles/index.scss';

import {Header} from './components';
import {Classrooms} from './pages';
 
function App() {
    return (
        <div className="app">
            <Header/>
            <Classrooms />
        </div>
    );
}

export default App;
