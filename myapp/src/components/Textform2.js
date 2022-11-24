import React, { useState } from 'react';

export default function Textform2(props) {
	const [text, setText] = useState('I am Tayyaba Ali');
    const handleClick = () => {
        console.log("State Changed")
        setText("You have clicked the onChanfeHandler button")
    }
    const onChangeHanler = (event) => {
        setText(event.target.value)
    }
	return (
		<div>
			<h1>{props.heading}</h1>
			<div className='mb-3'>
				<textarea className='form-control' id='mybox' value={text} onChange={onChangeHanler} rows='8'></textarea>
			</div>
			<button className='btn btn-primary' onClick={handleClick}>
				Convert to Upper Case
			</button>
		</div>
	);
}
