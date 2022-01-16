import React, { useState } from "react";

function Account() {
    const [activeDropMenu, setActiveDropMenu] = useState(false);

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
            Volodymyr
            {activeDropMenu &&
                <div className="header__account-menu">
                    <div className="header__account-menu-item">Settings</div>
                    <div className="header__account-menu-item">Exit</div>
                </div>
            }
        </div>
    );
}

export default Account;