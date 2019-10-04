import { createStyles, withStyles, makeStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import PropTypes from 'prop-types';
import { getUnsectionedContent } from '../../Factory/infoHelp';
import { getPanelTabs } from '../../Factory/tabHelp';


/*
A TabPanel may optionally carry subsections. If it does,
these subsections come in the form of a horizontal list of tabs
at the top of the panel. A sectionless TabPanel will simply carry
content.
*/

const styles = () => createStyles({
	sectionlessRoot: {
		width: '100%'
	},
	sectionedRoot: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%'
	}
});

const styleHelp = (val, index) => makeStyles({
	display: val !== index ? 'none' : 'inline'
});

function TabPanel (props: any) {

		const { tabData, classes, hasSections, index } = props;
		const [value, setValue] = React.useState(0);


		const handleChange = (evt, val) => {
			setValue(val);
		}

		if (hasSections === true) {
			//return a TabPanel with a horizontal
			//list of tabs at the top, corresponding
			//to the content keys.
			return (<div className={classes.sectionedRoot}>
				<Tabs 
				value={value} 
				onChange={handleChange} >
					{getPanelTabs(tabData, true)}
				</Tabs>
				{Object.keys(tabData).map((section, index) => {

					return (<TabPanel
						isSubPanel={true}
						index={index}
						classes={classes}
						hasSections={tabData[section].subsections}
						tabData={tabData[section].content}>
					</TabPanel>);
				})}
			</div>);
		}
		else {
			return (<div 
				className={classes.sectionlessRoot}
				{...styleHelp(value, index)}>
				{getUnsectionedContent(tabData)}
			</div>);
		}
}

export default withStyles(styles)(TabPanel);

