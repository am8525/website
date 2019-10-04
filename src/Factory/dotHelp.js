import { dotRadius } from '../Constants';
import React from 'react';
import Dot from '../Components/Background/Dot';

export const genDots = (num: Number, spawn: Object) => {
	let dots = [],
		randX = 0,
		randY = 0;
	for (let i = 0; i < num; i++) {
		randX = Math.floor(spawn.minX + (Math.random() * (spawn.maxX - spawn.minX)));
		randY = Math.floor(spawn.minY + (Math.random() * (spawn.maxY - spawn.minY)));
		dots.push(<Dot 
			id={JSON.stringify(i).concat("-").concat(num)}
			radius={dotRadius}
			x={randX}
			y={randY}>
			</Dot>);
	}
	return dots;
}