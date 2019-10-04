import { Tabs, Tab, TabList, TabPanel } from 'react-web-tabs';
import { getPanelComponent } from './PanelFactory';

export const getTabMenu = (tabs, currentTab, tabStr) => {
	if (tabs[currentTab].sections === true) { //only return a TabList if necessary
		return (<TabList>
			{Object.keys(tabs[currentTab].content).map((section, index) => {

				return (<Tab tabFor={tabStrBuilder(section,index)}>
					{section}
				</Tab>);
			})}
		</TabList>);
	}
	else {
		return null;
	}
}



export const getTabPanels = (tabs, currentTab, tabStr) => {
	if (tabs[currentTab].sections === true) {
		return Object.keys(tabs[currentTab].content).map((section, index) => {
			return (<TabPanel 
				tabId={tabStrBuilder(section,index)}
				component={getPanelComponent(tabs[currentTab].content,section)}/>);
		});
	}
	else {
		return (<TabPanel component={getPanelComponent(tabs, currentTab)}/>);
	}
}

const tabStrBuilder = (str, index) => {
	return (str.concat(index.toString(10)));
}