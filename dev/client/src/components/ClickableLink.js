import React from 'react';
import '../styles/ClickableLink.css';
import  { useHistory } from 'react-router-dom';

function ClickableLink({ text, target }) {
	let history = useHistory();

	const isOnPage = (targetLink) => {
		if (window.location.pathname === targetLink) {
		  return { borderBottom: "1px solid white" };
		} else {
		  return {};
		}
	};

	const doRedirect = () => {
		if (target !== undefined) {
			history.push(target);
		}
	}


	return (
		<div className="clickableLink" onClick={doRedirect} style={isOnPage(target)}>
			{text}
		</div>
	);

}



export default ClickableLink