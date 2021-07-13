import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {TextContext} from '../TextContext';

import Button from 'react-bootstrap/Button';
import '../styles/EndScreen.css';

function EndScreen({showDelay}) {
	let {setHasText, textInfo} = useContext(TextContext);
	let history = useHistory();
	let {wiseWords, author, title} = textInfo;

	let textSect = [];
	if (textInfo) {
		for (let i=0; i< wiseWords.length; i++) {
			if (i !== 0) {
				textSect.push(<div className='divider' key={i+'-div'}></div>);
			}
			textSect.push(<h4 key={i}>{textInfo.wiseWords[i]}</h4>);
		}
	}

	return (
		<div className="endScreenContainer" >
			<h2>{title} By {author}</h2>
			{textSect}
			<div className='endScreenButtonContainer'>
				<Button onClick={()=>setHasText(true)} variant='outline-primary end-screen end-replay'>Replay</Button>
				<Button onClick={()=>history.push('/submit')} variant='outline-info end-screen end-submit' >Submit A Quote</Button>
			</div>
		</div>
	)

}

export default EndScreen;
