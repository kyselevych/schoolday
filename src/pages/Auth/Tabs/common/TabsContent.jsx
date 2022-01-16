import React from "react";

function TabsContent({children, activeTab}) {
	
	function getActiveTabContent() {
		for (let i = 0; i < children.length; i++) {
			if (children[i].props.value === activeTab) {
				return children[i];
			}
		}
	}

	return (
		<div className="tabs__content-container">
			{getActiveTabContent()}
		</div>
	);
}

export default TabsContent;