import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useSession, signOut } from 'next-auth/react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {

  const {data: session, status} = useSession();

  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Glücksrad</Navbar.Brand>
        <Nav className="me-auto">

          {status === "authenticated" ? <>
          <Nav.Link href="/">Spielen</Nav.Link>
          <Nav.Link href="/HighscorePage">Highscore</Nav.Link>
          <Nav.Link href="/ProfilePage">Profile</Nav.Link> 
          <Nav.Link onClick={() => signOut()}>Logout</Nav.Link> </>
          : <Nav.Link href="/api/auth/signin" className="justify-content-end">Login</Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
  </>
  )
}
