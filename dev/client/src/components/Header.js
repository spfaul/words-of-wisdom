import React from 'react';
import '../styles/Header.css';

function Header(props)
{
	let baseStyle = {
		animationDuration: `${props['dur']}s`,
		animationDelay: `${props['delay']}s`,
		opacity: 0
	};

	return (
		<div className='myHeader' style={baseStyle}>
			{ props['text'] }
		</div>
	)
}

export default Header
