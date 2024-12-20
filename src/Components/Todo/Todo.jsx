import React from "react";
import "./Todo.css";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export default function Todo() {
  const [inputValue, setInputvalue] = useState("");
  const [task, setTask] = useState([]);
  const handleInputChange = (value) => {
    setInputvalue(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputvalue("");
      return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputvalue("");
  };
  return (
    <>
       <section className="todo-container">
         <header>
          <h1>Todo List</h1>
         </header>

         <section className="form">
                <form onSubmit={handleFormSubmit} action="">
                 <div>
                         <input
                        className="todo-input"
                        type="text"
                        autoComplete="off"
                        value={inputValue}
                        onChange={(event) => handleInputChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">
                         Add Task
                        </button>
                    </div>
                </form>
            </section>
            <section className="myUnOrdList">
                <ul className="todo-list">
                {   
                    task.map((curTask, index) => {
                        return<li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="check">
                                    <IoMdCheckmark />
                                </button>
                                 <button className="delete">
                                    <MdDelete />
                                </button>
                        </li>;
                    })
                }
                </ul>
            </section>
      </section>
    </>
 );
}
