import React from 'react'
import { useState, useEffect, useRef } from "react"
import Word from "./Word"
import { Button } from 'react-bootstrap'
import Image from 'next/image'

export default function Phrase(props) {

    const [phrase, setPhrase] = useState()
    const [guesses, setGuesses] = useState([])
    const [char, setChar] = useState("")
    const [stats, setStats] = useState({
        attempts: 0,
        moneyAmount: 200,
        hearts: 3,
    })
    const [wheelMessage, setWheelMessage] = useState("");
    const [bonus, setBonus] = useState();
    const [isSpinned, setIsSpinned] = useState(false)
    const [gameIsFinished, setGameIsFinished] = useState(false);

    const getPhrase = async () => {
        return await fetch("/api/game/getphrase", {method: "GET"})
            .then(res => res.json())
    }

    const spinWheel = async () => {
        return await fetch("/api/game/spinwheel", {method: "GET"})
            .then(res => res.json())
            .catch(e => console.log(e))
    }

    const handleWheel = () => {
        if (isSpinned) return;

        spinWheel()
            .then(data => {
                if (data.bankruptcy) {
                    setWheelMessage("Bankrott, du verlierst.")
                    setStats(oldStats => ({
                            ...oldStats,
                            hearts: 0,
                            moneyAmount: 0,
                        }))
                } else {
                    setWheelMessage("Du gewinnst "+ data.moneyBonus+ ", pro Buchstabe wenn diese richtig erraten werden!");
                    setBonus(data.moneyBonus);
                    setIsSpinned(true);
                }
            })
    }

    const handleChange = (e) => {
        for (let i = 0; i < guesses.length; i++) {
            if (guesses[i].toLowerCase() == e.target.value.toLowerCase())
                return setChar("")
        }
        setChar(e.target.value)
    }

    function isVowelRegEx(c) {
        if (c.length == 1) {
          return /[aeiou]/.test(c);
        }
    }

    function isGuessedCorrectly(c) {
        let cnt = 0;
        phrase.phrase.split("").map((val) => {
            if (c.toLowerCase() === val.toLowerCase()) cnt++;
        })
        return cnt;
    }

    function wasAlreadyGuessed(c) {
        guesses.forEach(val => {
            if (val.toLowerCase() == c.toLowerCase())
                return true;
        })
        return false;
    }

    function areAllCharsGuessed(guesses, phrase) {
        const phraseWithoutSpaces = phrase.replace(" ", "");
        for (let i = 0; i < phraseWithoutSpaces.split("").length; i++) {
            if (!guesses.includes(phraseWithoutSpaces.split("")[i])) {
             return false; 
            }
        }
        return true; 
    }

    const isWon = () => {
        if (!phrase) return false;
        return areAllCharsGuessed(guesses, phrase.phrase)
    }

    const stopGame = async () => {
        setGameIsFinished(true);
        return fetch("/api/game/stopgame", {
            method: "POST",
            body: JSON.stringify({
                phrase: phrase,
                stats: stats
            })
        })
    }

    const handleGuess = (e) => {
        if (char == "") {
            setWheelMessage("Das Eingabefeld ist noch leer!");
            return;
        }
        e.preventDefault()
        if (stats.hearts <= 0) return;
        if (!isSpinned) return setWheelMessage("Das Glücksrad muss zuerst gedreht werden.")
        if (wasAlreadyGuessed(char)) return setWheelMessage("Du hast diesen Buchstaben schon erraten.")

        const cntCorrectlyGuessed = isGuessedCorrectly(char);
        
        if (cntCorrectlyGuessed === 0) {
            if (isVowelRegEx(char)) {
                if (stats.moneyAmount < 50) {
                    setWheelMessage("Es wird ein Betrag von 50 benötigt für einen Vokal!")
                    return
                }  else {
                setStats(old => ({...old, 
                    moneyAmount: old.moneyAmount - 50,
                    attempts: old.attempts + 1,
                }))
            }
            } 
            setStats(old => ({
                ...old,     
                hearts: old.hearts - 1,
                attempts: old.attempts + 1,
            }))
            setWheelMessage("Der Buchstabe kommt nicht vor.");
            setGuesses(old => [...old, char])
            return setIsSpinned(false);
        }

        if (isVowelRegEx(char)) {
            if (stats.moneyAmount < 50) {
                setWheelMessage("Es wird ein Betrag von 50 benötigt für einen Vokal!")
                return
            }
            setStats(old => ({...old, 
                moneyAmount: old.moneyAmount + (-50+(bonus*cntCorrectlyGuessed)),
                attempts: old.attempts + 1,
            }))
            setGuesses(old => [...old, char]);
            setChar("");
        } else {
            setStats(old => ({...old, 
                moneyAmount: old.moneyAmount + (bonus*cntCorrectlyGuessed),
                attempts: old.attempts + 1,
            }))
            setGuesses(old => [...old, char]);
            setChar("");
        }
        return setIsSpinned(false);
    }

    useEffect(() => {
        getPhrase()
            .then(data => setPhrase(data))
            .catch(e => {
                setWheelMessage("Es sind keine weitere Phrasen vorhanden. Komme vorbei wenn der Admin neue hinzugefügt hat.");
                setGameIsFinished(true);
            })
    }, [])

    useEffect(() => {
        if (stats.hearts === 0) {
            setWheelMessage("Du hast keine Herzen mehr, das Spiel ist vorbei.")
             stopGame();
        } else if (isWon()) {
            setWheelMessage("Du hast gewonnen! Sieh dir die Highscore-Liste an!")
             stopGame();
        }
    }, [stats])


  return (
    <> 
        {!gameIsFinished ? 
        <> <input type="text" maxLength={1} value={char} onChange={(e) => handleChange(e)}></input>
        <Button variant="primary" style={{marginLeft: "1em", marginRight: "1em"}} onClick={(e) => {handleGuess(e)}}>Versuche</Button>

        <div className="break-flex"></div>
        {phrase ? <p>Kategorie: {phrase.category}</p> : null}

        <div className="break-flex"></div>

        {
            phrase?.phrase.split(" ").map((value, i) => <Word guesses={guesses} key={value +" "+ i} phrase={value} />)
        }

        {phrase ? <div className="break-flex" >
            <p>Versuche: {stats.attempts} <br></br>
            Geld: {stats.moneyAmount}<br></br>
            { stats.hearts > 0 ? Array.from(Array(stats.hearts)).map((val, i) => <Image alt="heart image" key={"heart "+i} src="/heart.png" width="30" height="30"></Image>) : null}</p>
        </div>: null}
        
        <div className="break-flex"></div>

       <Button variant="primary" type="submit" onClick={() => handleWheel()} style={{marginRight: "1em"}}>Glücksrad Drehen</Button>
       <Button variant="primary" type="submit" onClick={() => stopGame()}>Aufhören</Button> 
       <div className="break-flex"></div> </> 
        : null}
        
       <p>{wheelMessage}</p>
    </>
  )
}
