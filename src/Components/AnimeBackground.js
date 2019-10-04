import React from 'react';
import {withStyles, createStyles} from '@material-ui/core/styles';
import DotCloud from './Background/DotCloud';

const styles = () => createStyles({
	landscape: {
		position: 'absolute',
		top: '0px',
		left: '0px',
		width: '100%',
		height: '100%',
		zIndex: '-1',
	},
	centerpiece: {
		position: 'absolute',
		top: '50%',
		left: '50%'
	},
	dot: {
		position: 'absolute',
		color: 'red'
	}
});

class AnimeBackground extends React.Component {

	render(){
		const {classes} = this.props;
		return (
			<div className={classes.landscape}>
				<div className={classes.centerpiece}>
					<DotCloud />
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(AnimeBackground);