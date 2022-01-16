import React from "react";
import './Input.scss';

function Input({type = 'text', className = '', onChange = undefined, placeholder = ''}) {
    return (
        <input 
            type={type}
            className={'input-default ' + className}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default Input;