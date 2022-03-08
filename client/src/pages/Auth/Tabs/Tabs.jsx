import React, {useState} from "react";

import './Tabs.scss';
import TabsNav from "./common/TabsNav";
import TabsNavItem from "./common/TabsNavItem";
import TabsContent from "./common/TabsContent";

import SignUpTabsContent from "./SignUpTabsContent/SignUpTabsContent";
import SignInTabsContent from "./SignInTabsContent/SignInTabsContent";

function Tabs() {

	const [activeTab, setActiveTab] = useState('signup');
	
	return (
		<div className="tabs">
			<TabsNav>
				<TabsNavItem onTabClick={setActiveTab} activeTab={activeTab} value='signin'>Sign In</TabsNavItem>
				<TabsNavItem onTabClick={setActiveTab} activeTab={activeTab} value='signup'>Sign Up</TabsNavItem>
			</TabsNav>
			<TabsContent activeTab={activeTab} >
				<SignUpTabsContent value="signup"/>
				<SignInTabsContent value="signin"/>
			</TabsContent>
		</div>
	);
}

export default Tabs; 