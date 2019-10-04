import React from 'react';
import { Tab, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const tabPropHelper = (index, isSub) => {
	return isSub === true ? 
		{ 
			id: `subTab-${index}`,
			'aria-controls': `subTabPanel-${index}` 
		} :
		{
			id: `tab-${index}`,
			'aria-controls': `tabPanel-${index}`
		}
}

export const getPanelTabs = (content, isSubTab) => {
	if (content){
		return Object.keys(content).map((section, index) => {

			return (<Tab
				label={section}
				{...tabPropHelper(index, isSubTab)}
				>
			</Tab>);
		});
	}
	else {
		return null;
	}
}