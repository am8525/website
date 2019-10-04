/*
Factory responsible for computing and returning actual
raw content that will appear on panels.
*/

//React
import React from 'react';

//Factory
import { getTabMenu, getTabPanels } from './TabFactory';
import { Tabs } from 'react-web-tabs';

const delims = {
	plain: 'p',
	italic: 'i',
	bold: 'b',
	header: 'h',
	link: 'l'
}

export const getInfoCardContent = (tabs, currentTab, tabStr) => {
	/*
	Used to return a TabMenu, along with a stack of TabbedPanels and PlainPanels.
	*/
	if (tabs && tabs[currentTab] && tabs[currentTab].sections) {
		return (<div><Tabs vertical>
			{getTabMenu(tabs, currentTab, tabStr)}
			{getTabPanels(tabs, currentTab, tabStr)}
		</Tabs></div>);
	}
	/*
	Typically used to return a single PlainPanel.
	*/
	else if (tabs && tabs[currentTab]) {
		return getTabPanels(tabs, currentTab, tabStr);
	}
	else {
		return null;
	}
}

export const getContent = (content) => {
	/*
	Will eventually need a switch statement
	to key through different types of content.

	In the meantime for testing purposes, we will
	simply return the raw content.
	*/
	return (Object.keys(content).map((chunk => {
	
		switch (chunk.split('-')[0]) {
			case delims.link:
				var str = '';
				return Object.keys(content[chunk]).map((subchunk) => {
					if (subchunk == 'link'){
						return (<a href={content[chunk][subchunk]}>
							{str}
						</a>);
					}
					else {
						str = content[chunk][subchunk];
					}
				});
			default: 
				return (<p style={styling.p}>
					{content[chunk]}
				</p>);
		}

		
	})));
}

const styling = {
	para: {
	}
}