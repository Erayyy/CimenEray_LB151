import React from 'react'
import { useState, useEffect } from "react";

export default function Word(props) {


  return (
    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
      {
        props.phrase.split("").map((value, i) => {
          return <div key={props.phrase +" "+ i} 
          style={{border: "2px solid black", margin: "0.2em", height: "2em", 
          width: "2em", display: "flex", 
          justifyContent: "center", alignItems: "center"}}
          >

          {props.guesses.map(guess => {
            if (guess.toLowerCase() === value) {
              return value.toUpperCase();
            }
          })}

          </div>
        })
      }
      
      <div style={{margin: "0.3em", height: "2em", width: "2em"}}></div>
    </div> 
  )
}
