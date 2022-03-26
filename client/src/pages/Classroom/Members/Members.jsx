import React from "react";
import './Members.scss';

import {ButtonAdd} from "components";
import Member from "./Member/Member";


function Members() {
	
	const persons = ['Volodymyr Kyselevych', 'John Lehnon', 'David Gilmor', 'Joseph Robertson'];
	
	const isTeacher = true;
	
	return (
		<>
			{ isTeacher &&
				<div className="container--narrow">
					<ButtonAdd className="classroom__members__button-add" to="../add-member">Add member</ButtonAdd>
				</div>
			}
			<section className="container--narrow container--styled-content">
				<article className="classroom__members">
					<h2>Students</h2>
					<ul className="classroom__members-list">
						{persons.map(person => <Member name={person} isTeacher={true}/>)}
					</ul>
				</article>
				<article className="classroom__members">
					<h2>Teachers</h2>
					<ul className="classroom__members-list">
						{persons.map(person => <Member name={person} isTeacher={true}/>)}
					</ul>
				</article>
				
			</section>
		</>
	);
}

export default Members;