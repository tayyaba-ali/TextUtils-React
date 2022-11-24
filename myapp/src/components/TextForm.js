import React,{useState} from 'react'

export default function TextForm(props) {
    const handleClick = () => {
        console.log("Uppercase was clicked")
        setText("You have changed the default written value")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
        console.log('On changed');
		};
    const [text, setText] = useState("Enter your text")
    // setText("Write new Text")
    return (
    <div>
          <h1>{props.heading }</h1>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
          </div>
          <button className='btn btn-primary' onClick={handleClick}>
              Convert to Upper Case
          </button>
    </div>
  )
}
