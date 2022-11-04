import React, {useState} from 'react';
import "./index.css";

function ToDoForm(props) {

 const [input,setInput] = useState(props.edit ? props.edit.value : '');

 const handleChange = e => {
    setInput (e.target.value);
 }

 const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id:Math.floor(Math.random()*10000),
        text: input 
    })
    setInput('');
 };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
        <input type="text"
        placeholder='Update  your item'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        />
        <button  type='submit' className='todo-button'>Update</button>
        </>
        ) :
        (
          <>
          <input type="text"
        placeholder='Add a todo'
        value={input}
        name='text'
        className='todo-input edit'
        onChange={handleChange}
        />
        <button className='todo-button edit'>Add a task</button>
        </>
        )
      }
        

    </form>
  )
}

export default ToDoForm