import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Input from "./Input";

function App() {
  const [text, setText] = useState([[]]);
  const [index, setIndex] = useState({position: 0, line: 0}) //current position of cursor, [x,y]

  const handler = (event) => {
    let key = event.key //registers key press
    console.log("key is ", key)
    if (key === 'Enter') {
      text.splice(index.line + 1, 0, [])
      setIndex({position: 0, line: index.line + 1})
      setText(text)
      console.log("text = ", text)
    }
    else if (key === 'Backspace') {
      text[index.line].splice(index.position - 1, 1)
      setText(text)
      setIndex({position: index.position - 1, line: index.line})
    }
    else if (key.match(/[ -~]/)) {
      // accesss line from text
      // access position on line
      // insert key at position on line
      // console.log("index.line = ", index.line) //debug
      // console.log("which line are we at? ", text[index.line])//debug
      //console.log("what is cloned? ", text_clone) //debug
      //console.log("before update line is now: ", line_to_update); //debug
      // console.log("splice returned: ", ret); //debug
      //console.log("updated line is now: ", line_to_update); //debug
      text[index.line].splice(index.position, 0, key)
      setText(text); //update specific line with new key
      console.log("text = ", text) //debug
      setIndex({position: index.position + 1, line: index.line})
    }
  }
  return (
    <div>
      <input
        autoFocus
        onKeyDown={(e) => handler(e)
      }/>
      {text.map((line) => (
        <div>{line}</div>
      ))}
    </div>
  );
}

export default App;
