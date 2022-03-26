import React from "react";
import './Header.scss';

import schoolDayLogo from 'assets/icons/schoolDayLogo.svg';
import Account from "./Account";
import {Link} from "react-router-dom";
import {CLASSROOMS_PATH} from "utils/pathConsts";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <img src={schoolDayLogo} alt="SchoolDayLogo" className="header__logo"/>
                <div className="header__nav">
                    <Link className="header__nav-item" to={CLASSROOMS_PATH}>Classrooms</Link>
                </div>
                <Account />
            </div>
        </div>
    );
}
 
export default Header; 