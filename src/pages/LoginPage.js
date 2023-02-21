import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import Navigation from "../components/Navigation"
import { useSession } from 'next-auth/react';

export default function LoginPage() {

    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            window.location.href = "http://localhost:3000/api/auth/signin"
        } if (status === "authenticated") {
            window.location.href = "/"
        }
    }, [status])

  return (
    <>
     <p>Du wurdest nicht automatisch weitergeleitet? <a href="http://localhost:3000/api/auth/signin">Klick hier!</a></p>
    </>
  )
}
