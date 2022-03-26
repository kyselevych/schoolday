import React from "react";
import './Header.scss';

import schoolDayLogo from 'assets/icons/schoolDayLogo.svg';
import Account from "./Account";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <img src={schoolDayLogo} alt="SchoolDayLogo" className="header__logo"/>
                <div className="header__nav">
                    <div className="header__nav-item">Classrooms</div>
                </div>
                <Account />
            </div>
        </div>
    );
}
 
export default Header; 