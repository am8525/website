import React from 'react';
import {Button} from '@material-ui/core';
import {withStyles, createStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {buttonHoverColor} from '../Constants';
import PropTypes from 'prop-types';
import { TabEventType, TabEventCreator } from '../Actions/tabEvent';


const styles = () => createStyles({
	siteHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'center',
		width: '100%',
		borderBottom: '1px solid black',
		position: 'sticky'
	},
	headerBtn: {
		justifyContent: 'space-between',
		marginLeft: '10px',
		marginRight: '10px',
		marginBottom: '10px',
		marginTop: '10px',
		'&:hover': {
			background: buttonHoverColor,
			opacity: '.8'
		}
	}
});

const createHeaderButtons = (action: (type: string) => void, classes: any, tabData: any) => {
	return Object.keys(tabData).map(tab => 
		(<Button className={classes.headerBtn} onClick={() => action(tab)}> 
			{tab}
		</Button>
		)	
	);
}

const SiteHeader = (props: any) => {
		
		const {classes, loadHeader, tabData} = props;
		if (tabData){
			return (
				<div className={classes.siteHeader}>
					{createHeaderButtons(loadHeader, classes, tabData)}
				</div>
			);
		}
		else {
			return null;
		}
}

SiteHeader.propTypes = {
	classes: PropTypes.any,
	loadHeader: PropTypes.func,
	tabData: PropTypes.any
}

const mapStateToProps = (state: any, props: {}) => (
{
	tabData: state && state.config && state.config.profile && state.config.profile.tabs
});

const mapDispatchToProps = ({
	loadHeader: TabEventCreator.showTab
});

const connectedComp = connect(
	mapStateToProps, mapDispatchToProps)
	(SiteHeader);

export default withStyles(styles)(connectedComp);