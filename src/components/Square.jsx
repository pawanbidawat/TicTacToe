import React from 'react';
import { useState } from 'react';
// import './Square.css';



export default function Square(props){

    const [value , setValue] = useState(null);

   function handleClick ()
   {
    console.log("clicked");
    setValue('X');
   }

    return(
       <div>
        <button className='squre'
        onClick={props.onSquareClick}>{props.value}</button>
       </div>
    );
}