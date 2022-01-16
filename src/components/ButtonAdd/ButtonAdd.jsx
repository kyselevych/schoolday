import React from "react";

import './ButtonAdd.scss';

function ButtonAdd({children, onClick}) {
    return (
        <div className="button-add" onClick={onClick}>
            {children}
        </div>
    );
}

export default ButtonAdd;