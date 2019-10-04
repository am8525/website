import React from 'react';
import { IconButton } from '@material-ui/core';

const visitPage = (url) => {
	window.location = url;
}

const mailReq = (address) => {
	window.open('mailto:'.concat(address));
}

const download = (url) => {
	const link = document.createElement('a');
	link.href = url;
	link.download = url.split('/').pop();
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

export const generateButtons = (styles: any, buttonData: any) => {
	return Object.keys(buttonData).map( button => {
		if (buttonData[button].type === 'email') {
			return (<IconButton  onClick={() => mailReq(buttonData[button].email)}>
				<img src={buttonData[button].path}
					 className={styles.smallIcon} />
			</IconButton>);
		}
		else if (buttonData[button].type === 'link') {
			return (<IconButton onClick={() => visitPage(buttonData[button].link)}>
				<img src={buttonData[button].path}
					 className={styles.smallIcon} />
			</IconButton>);
		}
		else if (buttonData[button].type === 'download') {
			return (<IconButton onClick={() => download(buttonData[button].location)}>
				<img src={buttonData[button].path} 
					 className={styles.smallIcon} />
			</IconButton>);
		}
	});
}