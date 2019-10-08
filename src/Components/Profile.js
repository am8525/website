import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {IconButton} from '@material-ui/core';
import {withStyles, createStyles} from '@material-ui/core/styles';
import { ProfileBackgroundColor } from '../Constants';

import { generateButtons } from '../Factory/ButtonFactory';

const styles = () => createStyles({
	headshot: {
		borderRadius: '50%',
		height: '240px',
		width: '200px',
		border: '3px solid black'
	},
	profileInfo: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	name: {
		marginBottom: '15px'
	},
	quickLinks: {
		display: 'flex',
		marginTop: '50px'
	},
	smallIcon: {
		width: '60px',
		height: '45px',
		backgroundColor: 'transparent',
		marginLeft: '15px',
		marginRight: '15px',
	}
});

const rootStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: ProfileBackgroundColor,
	borderRadius: '20px',
	border: '3px solid black',
	transition: 'margin-top .5s ease-out',
	padding: '10px',
	minWidth: '80%',

	margin: '10px'
}

const Profile = (props: any) => {

		const { classes, profile, tab } = props;
		if (profile) {
			return (
				<div style={{...rootStyle, 'marginTop': tab != 'none' ? '5px' : '20%'}}>
					<div>
						<img src={profile.pic && profile.pic.path} className={classes.headshot} />
					</div>
					<div className={classes.profileInfo}>
						<div className={classes.name}><h2>
							{profile.name && profile.name.value}
						</h2></div>
						<div className={classes.blurb}><p>
							{profile.blurb && profile.blurb.value}
						</p></div>
						<div className={classes.quickLinks}>
							{generateButtons(classes, profile.icons)}		
						</div>
					</div>
				</div>
			);
		}
		else {
			return null;
		}
}

Profile.propTypes = {
	classes: PropTypes.any,
	profile: PropTypes.any,
	tab: PropTypes.any
}

const mapStateToProps = (state: any, props: {}) => ({
	profile: state && state.config && state.config.profile,
	tab: state && state.tab && state.tab.openTab
});

const connectedProfile = connect(mapStateToProps, null)(Profile);

export default withStyles(styles)(connectedProfile);

