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
        return await fetch("/api/admin/addphrase", {
            method: "POST",
            body: JSON.stringify({
                phrase: phrase,
                category: category
            }), 
        }
        );
    } 

    const getPhrases = async () => {
        return await fetch("/api/admin/getphrases").then(res => res.json()
        .then((data) => setPhrases(data)))
    }    

    const removePhrase = async () => {
        return await fetch("/api/admin/removephrase", {
            method: "DELETE",
            body: JSON.stringify({
                phrase: currPhrase,
            })
        }
        );
    }

    const removeCategory = async () => {
        return await fetch("/api/admin/removecategory", {
            method: "DELETE",
            body: JSON.stringify({
                category: currCategory,
            })
        }
        );
    }

    useEffect(() => {
        getPhrases();
    }, [])

   useEffect(() => {
        if (phrases == null) return;
        const distinctCategories = [...new Set(phrases.map(item => item.category))];
        setCategories(distinctCategories);
        setCurrCategory(distinctCategories[0]);
    }, [phrases])

    useEffect(() => {
        if (phrases == null) return;
        for (const val of phrases) {
            if (val.category == currCategory) {
                setCurrPhrase(val)
                return;
            }
        }
    }, [currCategory])

  return (
    <div style={{marginRight: "30%"}}>
        <h4>AdminInterface</h4>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Kategorie</Form.Label>
                <Form.Control placeholder="Sprichw??rter" onChange={e => {setCategory(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>R??tselphrase/R??tselwort</Form.Label>
                <Form.Control placeholder="Einem geschenkten Gaul schaut man nicht ins Maul" onChange={e => {setPhrase(e.target.value)}} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => postPhrase()}>
                Hinzuf??gen
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
            <br></br>
            <Button type="submit" variant="danger" onClick={() => removeCategory()}>Kategorie L??schen</Button>
            </Form.Group>
        </Form>
        <br></br>
        <Form>
            <Form.Group controlId="formGridState">
            <Form.Label>Phrasen</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={(e) => setCurrPhrase(JSON.parse(e.target.value))}>
                {phrases?.map((val, i, arr) => {
                    if (currCategory == val.category)
                        return <option value={JSON.stringify(val)} key={val.phrase +" "+ val.id}>{val.phrase}</option>
                })}
            </Form.Select>
            <br></br>
            <Button variant="danger" type="submit" onClick={() => removePhrase()}>Phrase L??schen</Button>
            </Form.Group>
        </Form>
        <br></br>
    </div>
  )
}
