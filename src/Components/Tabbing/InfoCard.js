import {Card, CardActions, CardContent, IconButton} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { TabEventType, TabEventCreator } from '../../Actions/tabEvent';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { connect } from 'react-redux';
import { getPanelTabs } from '../../Factory/tabHelp';
import TabPanel from './TabPanel';
import { getUnsectionedContent } from '../../Factory/infoHelp';

const windowStyle = (openTab) => createStyles({
	root: {
		display: openTab == "none" ? 'none' : 'flex',
		flexDirection: 'row',
		border: '1px solid black',
		minHeight: '500px',
		marginTop: '20%',
		marginBottom: '-2%',
		clear: 'both',
		borderRadius: '40px',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		width: '75%',
		clear: 'both',
		position: 'absolute',
		bottom: '3%'
	},
	exitIcon: {
		marginTop: '10px',
		marginRight: '10px'
	}
});

const styles = () => createStyles({
	exitIcon: {
		position: 'absolute',
		top: '3%',
		right: '3%'
	}
});

function InfoCard (props: any) {

		const [value, setValue] = React.useState(0);
		const {currentTab, tabs, classes} = props;
		
		const handleChange = (evt, val) => {
			setValue(val);
		}

		if (tabs && tabs[currentTab]){
			return tabs[currentTab].sections === true ? 
			(<div style={windowStyle(currentTab).root}>
				<Tabs
				orientation="vertical"
				value={value}
				onChange={handleChange}>
				{getPanelTabs(tabs[currentTab].content, false)}
				</Tabs>
				{Object.keys(tabs[currentTab].content).map((section, index) => {

					return (<TabPanel
						isSubPanel={false}
						index={index}
						hasSections={tabs[currentTab].content[section].subsections}
						tabData={tabs[currentTab].content[section].content}>
					</TabPanel>);
				})}
			</div>) 
			: (
				<div style={windowStyle(currentTab).root}>
					{getUnsectionedContent(tabs[currentTab].content)}
					<IconButton onClick={() => props.hideTab()}
								className={classes.exitIcon}>
						<CloseIcon />
					</IconButton>
				</div>
			);
		}
		else {
			return null;
		}
	
}

const mapStateToProps = (state: any, props: any) => ({
	currentTab: state && state.tab && state.tab.openTab,
	tabs: state && state.config && state.config.profile && state.config.profile.tabs
});

const mapDispatchToProps = ({
	hideTab: TabEventCreator.hideTab
})

const connectedCard = connect(mapStateToProps, mapDispatchToProps)(InfoCard);

export default withStyles(styles)(connectedCard);





