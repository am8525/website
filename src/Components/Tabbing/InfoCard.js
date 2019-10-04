//React 
import React from 'react';
import { connect } from 'react-redux';

//UI
import { Tabs } from 'react-web-tabs';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

//Styling
import { withStyles, createStyles } from '@material-ui/core/styles';

//Actions
import { TabEventType, TabEventCreator } from '../../Actions/tabEvent';

//Factory
import { getTabMenu, getTabPanels } from '../../Factory/TabFactory';
import { getInfoCardContent } from '../../Factory/ContentFactory';

//Constants
import { TAB_STR } from '../../Constants';

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

	const { tabs, currentTab, classes } = props;

	return (<div style={windowStyle(currentTab).root}>
		{getInfoCardContent(tabs, currentTab, TAB_STR)}
	<IconButton 
		onClick={() => props.hideTab()}
		className={classes.exitIcon}>
		<CloseIcon />
	</IconButton>
	</div>);	
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





