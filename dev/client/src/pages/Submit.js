import React, {useState} from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import './Submit.css';

function Submit() {
	const [wiseLetterCount, setWiseLetterCount] = useState(['',0]);
	const [authorLetterCount, setAuthorLetterCount] = useState(['', 0]);
	const [titleLetterCount, setTitleLetterCount] = useState(['', 0]);

	const styles = StyleSheet.create({
		'submit-input-wise': {
			backgroundColor: '#310B0B',
			color: 'white',
			padding: '4px',
			width: '60%',
			fontSize: '15px',
			border: '2px solid #D9B429',
			borderRadius: '5px'
		}
	});

	const submitQuoteToAPI = async () => {
		await axios.post('http://localhost:3001/api/queueWords',
			{
				words: wiseLetterCount[0],
				author: authorLetterCount[0],
				title: titleLetterCount[0]
			})
		alert('Submission Successful!')
	};

	return (
		<div style={{backgroundColor: "#310B0B"}}>
			<div className="submit-container fill-content">
				<h2>Submit your own quote!</h2>

				<TextInput
					placeholder='Enter Author Name Here'
					style={styles['submit-input-wise']}
					maxLength={20}
					onChangeText={(text)=>setAuthorLetterCount([text, text.length])}
				/>
				<h4 style={{'marginLeft':'auto', 'marginRight':'20%'}}>{authorLetterCount[1]}/20</h4>


				<TextInput
					placeholder='Enter Title Here'
					style={styles['submit-input-wise']}
					maxLength={20}
					onChangeText={(text)=>setTitleLetterCount([text, text.length])}
				/>
				<h4 style={{'marginLeft':'auto', 'marginRight':'20%'}}>{titleLetterCount[1]}/20</h4>

				<TextInput
					placeholder='Enter Wise Words Here, Each Separated With a "\"'
					style={styles['submit-input-wise']}
					multiline={true}
					numberOfLines={7}
					maxLength={300}
					onChangeText={(text)=>setWiseLetterCount([text, text.length])}
				/>
				<h4 style={{'marginLeft':'auto', 'marginRight':'20%'}}>{wiseLetterCount[1]}/300</h4>


				<Button
					variant='outline-info end-screen end-submit'
					onClick={submitQuoteToAPI}
				>Submit</Button>
			</div>
		</div>
	);
}


export default Submit;