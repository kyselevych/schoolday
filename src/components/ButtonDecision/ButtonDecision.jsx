import React from "react";

import './ButtonDecision.scss';

function ButtonDecision({type = 'positive', children, onClick}) {
    let activeType = null;

    switch(type) {
        case 'positive': {
            activeType = 'button-decision--positive';
            break;
        }
        case 'negative': {
            activeType = 'button-decision--negative';
            break;
        }
        default: {
            activeType = 'button-decision--positive';
            break;
        }
    }

    return (
        <div 
            className={'button-decision ' + activeType}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default ButtonDecision;