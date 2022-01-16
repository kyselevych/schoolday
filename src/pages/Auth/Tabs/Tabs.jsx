import React, {useState} from "react";

import './Tabs.scss';
import TabsNav from "./common/TabsNav";
import TabsNavItem from "./common/TabsNavItem";
import TabsContent from "./common/TabsContent";
import TabsContentItem from "./common/TabsContentItem";


function Tabs() {

	const [activeTab, setActiveTab] = useState('signin');
	
	return (
		<div className="tabs">
			<TabsNav>
				<TabsNavItem onTabClick={setActiveTab} activeTab={activeTab} value='signin'>Sign In</TabsNavItem>
				<TabsNavItem onTabClick={setActiveTab} activeTab={activeTab} value='signup'>Sign Up</TabsNavItem>
			</TabsNav>
			<TabsContent activeTab={activeTab} >
				<TabsContentItem value='signin'>
					<form action="POST">
						<input
							className="tabs__input"
							type="email"
							name="email" placeholder="Enter email"
							pattern="^[A-Za-z0-9](?:(?![\-\.\_+][\-\.\_+])[\w\-\.])*[A-Za-z0-9]@([A-Za-z0-9]+[A-Za-z0-9\-]*(?![\.\-][\.\-])\.)+[A-Za-z]+$"
							required
						/>
						<input
							className="tabs__input"
							type="password"
							name="password"
							placeholder="Enter password"
							required
						/>
						<input
							className="tabs__input"
							type="password"
							name="repeatpassword"
							placeholder="Repeat password"
							required
						/>
						<input
							className="tabs__input tabs__input--submit"
							type="submit"
							name="submit"
						/>
					</form>
				</TabsContentItem>
				<TabsContentItem value='signup'>
					<form action="POST">
						<input
							className="tabs__input"
							type="email"
							name="email" placeholder="Enter email"
							pattern="^[A-Za-z0-9](?:(?![\-\.\_+][\-\.\_+])[\w\-\.])*[A-Za-z0-9]@([A-Za-z0-9]+[A-Za-z0-9\-]*(?![\.\-][\.\-])\.)+[A-Za-z]+$"
							required
						/>
						<input
							className="tabs__input"
							type="password"
							name="password"
							placeholder="Enter password"
							required
						/>
						<input
							className="tabs__input tabs__input--submit"
							type="submit"
							name="submit"
						/>
					</form>
				</TabsContentItem>
			</TabsContent>
		</div>
	);
}

export default Tabs; 