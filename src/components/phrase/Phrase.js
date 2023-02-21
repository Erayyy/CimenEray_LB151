import React from 'react'
import { useState, useEffect, useRef } from "react"
import Word from "./Word"
import { Button } from 'react-bootstrap'

export default function Phrase(props) {

    const [phrase, setPhrase] = useState("einen rattenschwanz hinter sich herziehen")
    const [guesses, setGuesses] = useState([])
    const [char, setChar] = useState("")

    const handleChange = (e) => {
        for (let i = 0; i < guesses.length; i++) {
            if (guesses[i] == e.target.value)
                return
        }

        setChar(e.target.value)
    }

    const handleClick = () => {
        // api 
        setGuesses(old => [...old, char]);
        setChar("")
    }

  return (
    <>
        <input type="text" maxLength={1} value={char} onChange={(e) => handleChange(e)}></input>  
        <Button variant="primary" style={{marginLeft: "1em"}} onClick={() => handleClick()}>Versuche</Button>
        <div className="break-flex"></div>
        <br></br>
       {
        phrase.split(" ").map((value, i) => {
            return <Word guesses={guesses} key={value +" "+ i} phrase={value} />
        })
       }
    </>
  )
}