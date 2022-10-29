import React, { useState, useRef } from 'react'
import { useEffect } from 'react';



export default function TodoForm(props) {
    const [input, setInput]= useState("");

    const inputRef= useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    const handleSubmit= e=>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });

        setInput("");
    };

    const handleChange= e=>{
        setInput(e.target.value);
    };

  return (
    <form className={"todo-form"} onSubmit={handleSubmit}>

        <input 
            type="text"
            placeholder={"Add a todo"}
            value={input} 
            name={"text"} 
            className={"todo-input"}
            onChange={handleChange}
            ref={inputRef}
        />

        <button className={"todo-button"}> Add todo</button>

    </form>
  )
}
