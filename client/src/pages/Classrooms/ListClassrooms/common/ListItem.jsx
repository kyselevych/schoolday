import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";

function ListItem(props) {
	const {name, id} = props;
	
	const navigate = useNavigate();
	const handleClick = useCallback(() => {
		navigate(`/classroom/${id}`);
	}, []);
	
    return (
        <div className="classrooms__list-item" onClick={handleClick}>
            <span className="classrooms__list-item-name">{name}</span>
        </div>
    );
}

export default ListItem;