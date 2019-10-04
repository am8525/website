/*
Factory class responsible for generating Panels,
based on provided input.

If subsections is true, a Panel with subtabs will be returned.
else, a plain Panel is returned.
*/

import { TabList, Tab } from 'react-web-tabs';
import { getContent } from './ContentFactory';
import { getTabMenu, getTabPanels } from './TabFactory';
import { SUBTAB_STR } from '../Constants';

export const getPanelComponent = (tabContent, section) => {
	if (tabContent[section].sections === true) { //return a TabbedPanel
		return TabbedPanel(tabContent, section);
	}
	else { //return a PlainPanel
		return PlainPanel(tabContent, section);
	}
}

const PlainPanel = (sections, currentSection) => {
	return (<div> 
		{getContent(sections[currentSection].content)
/*
TODO: Add styling to this component!
*/
		}
	</div>);
}

const TabbedPanel = (sections, currentSection) => {
	return (<div><Tabs horizontal>
		{getTabMenu(sections, currentSection, SUBTAB_STR)}
		{getTabPanels(sections, currentSection, SUBTAB_STR)}
	</Tabs></div>);
}