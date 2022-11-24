import React, { useState } from 'react';

export default function TextForm3(props) {
    const handleClick = () => {
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleState = (event) => {
        setText(event.target.value)
    }
	const [text, setText] = useState('Write your text here');
	return (
		<div>
			<div>
				<h1>{props.heading}</h1>
				<div className='mb-3'>
					<textarea className='form-control' id='mybox' value={text} rows='8' onChange={handleState}></textarea>
				</div>
				<button className='btn btn-primary' onClick={handleClick}>Convert to Upper Case</button>
			</div>
		</div>
	);
}
