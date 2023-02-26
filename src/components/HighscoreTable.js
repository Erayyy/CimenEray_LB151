import React, { useEffect, useState } from 'react'
import { Table, Button, Form } from 'react-bootstrap'
import { useSession } from 'next-auth/react';

export default function HighscoreTable() {

    const {data: session, status} = useSession();
    const [entries, setEntries] = useState([])
    const [currentRow, setCurrentRow] = useState({})

    const getHighscoreEntries = async () => {
        return fetch("/api/highscore/gethighscorelist", {method: "GET"})
            .then(res => res.json());
    }

    const handleRowClick = e => {
        const entryData = JSON.parse(e.currentTarget.getAttribute("data"))
        setCurrentRow(entryData)
    }

    const deleteRow = async () => {
        return fetch("/api/admin/removehighscoreentry", {
            method: "DELETE",
            body: JSON.stringify({idGame: currentRow.id})
        })
    }

    useEffect(() => {
        getHighscoreEntries()
            .then(data => {
                let sortedData = data.sort((a, b) => {
                    return b.moneyamount-a.moneyamount;
                })
                setEntries(sortedData);
            })
    }, [])

    useEffect(() => {
        if (entries.length === 0) return;
        setCurrentRow(entries[0])
    }, [entries])

  return (
    <>
    <Table striped bordered hover size="sm" responsive="sm">
      <thead>
        <tr>
          <th>Rang</th>
          <th>Spieler</th>
          <th>Zeitpunkt</th>
          <th>Geldbetrag</th>
          <th>Anzahl Spielrunden</th>
        </tr>
      </thead>
      <tbody>
        { entries.length > 0 ? 
            entries.map((val, i) => {
                val.rank = i+1;
                return (
                    <tr key={val.id} data={JSON.stringify(val)} onClick={(e) => handleRowClick(e)}>
                        <td>{val.rank}</td>
                        <td>{val.name ? val.name : "BANNED USER"}</td>
                        <td>{val.datetime}</td>
                        <td>{val.moneyamount}</td>
                        <td>{val.cntrounds}</td>
                    </tr>
                )
            }) : null
        }
      </tbody>
    </Table>
    { session?.user.id === "26624740" ? 
    <>
        <div className="break-flex"></div>
        <p>Ausgewählt: {currentRow.name}, am {currentRow.datetime}, mit Rang {currentRow.rank}</p>
        <Form>
            <Button variant="danger" type="submit" onClick={() => deleteRow()}>Ausgewählte Reihe löschen</Button>
        </Form>
    </> : null
    }
  
    </>
  )
}
