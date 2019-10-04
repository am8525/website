import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyles} from '@material-ui/core/styles';

const styles = () => createStyles({
	dot: {
		height: '10px',
		width: '10px',
		borderRadius: '50%',
		backgroundColor: 'red'
	}
});

class Dot extends React.Component {

	constructor(props){
		super(props);
	}
	render() {
		const {classes} = this.props;
		return (
			<div className={classes.dot}></div>
		);
	}
}

Dot.propTypes = {
	id: PropTypes.string.isRequired,
	radius: PropTypes.number.isRequired,
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired
}

export default withStyles(styles)(Dot);
