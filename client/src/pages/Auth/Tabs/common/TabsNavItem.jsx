import React from 'react';

function TabsNavItem({onTabClick, activeTab, children, value, ...props}) {
	
	function setActiveTab() {
		onTabClick(value);
	}

	return (
		<div 
			className={`tabs__nav-item ${activeTab === value ? 'tabs__nav-item--active' : ''}`}
			onClick={setActiveTab}
		>  
			{children}
		</div>
	);
}

export default TabsNavItem;