import React, { useEffect } from 'react'
import Navigation from "../components/Navigation"
import { useSession } from 'next-auth/react';
import AdminInterface from '@/components/AdminInterface';

export default function ProfilePage() {

    const {data: session, status} = useSession();

  return (
    <>
    <Navigation></Navigation>
    <div style={{paddingLeft: "2em", paddingTop: "1.5em"}}>
        <h4>Profile </h4>
        <img src={session?.user.image}></img>
        <div>Name: {session?.user.name}</div>
        <br></br>

        {session?.user.id === "26624740" ? <AdminInterface></AdminInterface> : null}
        
    </div>
    </>
  )
}
