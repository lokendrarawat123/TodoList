import React from 'react'

export default function Form() {
  const [inputValue,setInputValue]=useState("");
  const [task,setTask]=useState([]);
  const handleInputchange=(value)=>{
    setInputValue(value);
  }
  return (
    <form >
    <div>
        <input type="text" /> 
        <span><button type="submit">Add Task</button>
        </span>
    
    </div>
    </form>
  );
}
