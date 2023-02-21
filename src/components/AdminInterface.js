import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useSession } from 'next-auth/react';
import { useState, useEffect, useRef } from 'react';

export default function AdminInterface() {

    const [phrase, setPhrase] = useState();
    const [category, setCategory] = useState();
    const [phrases, setPhrases] = useState();
    const [categories, setCategories] = useState();
    const [currCategory, setCurrCategory] = useState();
    const [currPhrase, setCurrPhrase] = useState();

    const postPhrase = async () => {
        return await fetch("/api/addphrase", {
            method: "POST",
            body: JSON.stringify({
                phrase: phrase,
                category: category
            }), 
        }
        );
    } 

    const getPhrases = async () => {
        return await fetch("/api/getphrases", {
        }).then(res => res.json()
        .then((data) => setPhrases(data)))
    }    

    useEffect(() => {
        getPhrases();
    }, [])

   useEffect(() => {
        if (phrases == null) return;
        const distinctCategories = [...new Set(phrases.map(item => item.category))];
        setCategories(distinctCategories);
        setCurrCategory(distinctCategories[0]);
        phrases.forEach((val) => {
            if (val.category === currCategory) {
                setCurrPhrase(val);
                return;
            }
        })
   }, [phrases])

   console.log(currPhrase)
   console.log(currCategory)

  return (
    <div style={{marginRight: "30%"}}>
        <h4>AdminInterface</h4>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Rätselphrase/Rätselwort</Form.Label>
                <Form.Control placeholder="Einem geschenkten Gaul schaut man nicht ins Maul" onChange={e => {setPhrase(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Kategorie</Form.Label>
                <Form.Control placeholder="Sprichwörter" onChange={e => {setCategory(e.target.value)}} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => postPhrase()}>
                Hinzufügen
            </Button>
        </Form>
        <br></br>

        <Form>
            <Form.Group controlId="formGridState">
            <Form.Label>Kategorien</Form.Label>
            <Form.Select defaultValue="Choose..." value={currCategory} onChange={(e) => setCurrCategory(e.target.value)}>
                {categories?.map((val, i) => {
                    return <option key={val +" "+ i}>{val}</option>
                })}
            </Form.Select>
            </Form.Group>
        </Form>
        <br></br>
        <Form>
            <Form.Group controlId="formGridState">
            <Form.Label>Phrasen</Form.Label>
            <Form.Select defaultValue="Choose..." value={currPhrase} onChange={(e) => setCurrPhrase(JSON.parse(e.target.value))}>
                {phrases?.map((val, i, arr) => {
                    if (currCategory == val.category)
                        return <option value={JSON.stringify(val)} key={val.phrase +" "+ val.id}  >{val.phrase}</option>
                })}
            </Form.Select>
            </Form.Group>
        </Form>
        <br></br>
    </div>
  )
}
