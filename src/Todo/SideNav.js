import React from 'react'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

export default function SideNav(props) {
        const navigate = useNavigate()
  const handleSignout=()=>{
    signOut(auth).then(()=>{
      navigate("/")
    })
}
  return (
    <div className='side-nav'>
    <h1 className='Heading'>TODO LIST</h1><hr></hr><br></br>
    <button className='newS' onClick={()=>{props.change("INBOX")}}>
       
            INBOX
       
    </button><br></br>
    <div>
    <button className='newS' onClick={()=>{props.change("TODAY")}}>
        
            TODAY
       
    </button><br></br>
    </div>
    <button className='newS' onClick={()=>{props.change("NEXT")}}>
       
            NEXT 7 DAYS
        
    </button><br></br>
    <div>
    <button className='newSingout' onClick={handleSignout}>Signout</button>
    </div>

   </div>
  )
}