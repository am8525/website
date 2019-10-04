/*
Factory class responsible for generating Panels,
based on provided input.

If subsections is true, a Panel with subtabs will be returned.
else, a plain Panel is returned.
*/

//React
import React from 'react';

//UI
import { Tabs } from 'react-web-tabs';

//Factory
import { getContent } from './ContentFactory';
import { getTabMenu, getTabPanels } from './TabFactory';

//Constants
import { SUBTAB_STR } from '../Constants';

const styling = {
	plainPanel: {
		marginLeft: '20px',
		marginTop: '10px'
	}
}

export const getPanelComponent = (tabContent, section) => {
	console.log(tabContent[section])
	if (tabContent && tabContent[section] && tabContent[section].sections) { //return a TabbedPanel
		return <TabbedPanel sections={tabContent} currentSection={section} />
	}
	else { //return a PlainPanel
		return <PlainPanel sections={tabContent} currentSection={section}/>
	}
}

/*
PlainPanel is a functional React Component.
*/
function PlainPanel(props: any) {

	const { sections, currentSection } = props;

	if (sections && sections[currentSection] && sections[currentSection].content){
		return (<div style={styling.plainPanel}> 
		{getContent(sections[currentSection].content)
/*
TODO: Add styling to this component!
*/
		}
		</div>);
	}
	else {
		return null;
	}
	
}

function TabbedPanel(props: any) {

	const { sections, currentSection } = props;

	if (sections && sections[currentSection]) {
		return (<div><Tabs horizontal>
			{getTabMenu(sections, currentSection, SUBTAB_STR)}
			{getTabPanels(sections, currentSection, SUBTAB_STR)}
		</Tabs></div>);
	}
	else {
		return null;
	}
}