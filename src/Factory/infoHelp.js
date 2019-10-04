import React from 'react';
import { Tabs, Tab, Box, Typography } from '@material-ui/core';

const splitChar = '-',
	paraChar = 'p', //start of a paragraph.
	boldChar = 'b', //bold writing. Usually used for titles.
	italicChar = 'i', //italic writing. Usually placed underneath a title.
	linkChar = 'l', //a link. Tries to anchor to 'here' and defaults to entire String
	headerChar = 'h'; //header of a list.

const styling = {
	para: {
		marginLeft: '13px',
		marginTop: '10px'
	},
	unsectionedRoot: {
		marginTop: '30px',
		marginLeft: '5px',
		width: '80%'
	}
}

export const getUnsectionedContent = (content) => {
	
	if (content){

		return (<div style={styling.unsectionedRoot}>
			{Object.keys(content).map(chunk => {
				
				switch (chunk.split(splitChar)[0]) {
					case paraChar:
						return (<p style={styling.para}>{content[chunk]}</p>);
				}
			})}
		</div>);
	}
	else {
		return null;
	}
}

