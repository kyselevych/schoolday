import React, { useState } from "react";
import {Link} from "react-router-dom";
import {LOGIN_PATH} from "utils/pathConsts";
import useAuth from "hook/useAuth";

function Account() {
    const [activeDropMenu, setActiveDropMenu] = useState(false);
	const {user, logout} = useAuth();

    function showDropMenu() {
        setActiveDropMenu(true);
    }

    function hideDropMenu() {
        setActiveDropMenu(false);
    }

    return (
        <div 
            className="header__account" 
            onMouseEnter={showDropMenu}
            onMouseLeave={hideDropMenu}
        >
	        {user.firstname}
            {activeDropMenu &&
                <div className="header__account-menu">
                    <Link className="header__account-menu-item" to={LOGIN_PATH} onClick={logout}>Exit</Link>
                </div>
            }
        </div>
    );
}

export default Account;