import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Profile from '../Components/Profile'
import MyProject from '../Components/MyProject'

function Dashboard() {
  const [username,setUsername]= useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  })
  return (
    <div>
      <Header insideDashboard/>
      <div style={{marginTop:"100px"}} className="row d-flex container-fluid">
            <div className='col-lg-8'>
              <h2 className='mb-3'>Welcome <span className='text-warning'>{username}</span></h2>
              <MyProject/>
            </div>
            <div className='col-lg-4 mb-5'><Profile/></div>
        </div>
    </div>
  )
}

export default Dashboard