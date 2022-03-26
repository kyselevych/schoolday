import React from "react";
import {Link} from "react-router-dom";

import './ButtonAdd.scss';

function ButtonAdd({children, onClick, className, to}) {
    return (
        <Link className={"button-add" + " " + className} onClick={onClick} to={to}>
            {children}
        </Link>
    );
}

export default ButtonAdd;