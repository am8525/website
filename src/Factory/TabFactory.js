//React
import React from 'react';

//UI
import { Tab, TabList, TabPanel } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

//Factory
import { getPanelComponent } from './PanelFactory';

export const getTabMenu = (tabs, currentTab, tabStr) => {
	if (tabs && tabs[currentTab] && tabs[currentTab].sections) { //only return a TabList if necessary
		console.log(tabs[currentTab])
		return (<div><TabList>
			{Object.keys(tabs[currentTab].content).map((section, index) => {
				return (<Tab tabFor={tabStrBuilder(section,index)}>
					{section}
				</Tab>);
			})}
		</TabList></div>);
	}
	else {
		return null;
	}
}



export const getTabPanels = (tabs, currentTab, tabStr) => {
	if (tabs && tabs[currentTab] && tabs[currentTab].sections) {
		return (<div> {Object.keys(tabs[currentTab].content).map((section, index) => {
			return (<TabPanel 
				tabId={tabStrBuilder(section,index)}
				render={({selected}) => selected ? 
					getPanelComponent(tabs[currentTab].content,section) : null} />);
		})}</div>);
	}
	else {
		return getPanelComponent(tabs, currentTab);
	}
}

const tabStrBuilder = (str, index) => {
	return (str.concat(index.toString(10)));
}