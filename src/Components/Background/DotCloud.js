/*
A bunch of dots moving around.
*/

import Dot from './Dot';
import React from 'react';
import Anime from 'react-anime';
import { genDots } from '../../Factory/dotHelp';
import { dotCount } from '../../Constants';

const getAnimeDotProps = dot => {
	let rads = (Math.PI * 2) / (dotCount),
	id = parseInt(dot.id.split('-')[0])
	let transY = JSON.stringify(Math.sin(rads * id)).concat('px');
	let transX = JSON.stringify(Math.cos(rads * id)).concat('px');
	
	return ({
		translateY: transX,
		translateX: transY,
		loop: true
	});
}

class DotCloud extends React.Component {
	constructor(props) {
		super(props);

		this.dots = genDots(dotCount, {
			minX: 10,
			maxX: 500,
			minY: 10,
			maxY: 500
		});
	}
	render() {
		
		const { dots } = this.props;

		return (<div>
			{Object.keys(dots).map(dot => {
				
			})}
		</div>);
	}
}

export default DotCloud;