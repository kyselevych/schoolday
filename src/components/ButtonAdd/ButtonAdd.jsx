import React from "react";

import './ButtonAdd.scss';

function ButtonAdd({children, onClick, className}) {
    return (
        <div className={"button-add" + " " + className} onClick={onClick}>
            {children}
        </div>
    );
}

export default ButtonAdd;