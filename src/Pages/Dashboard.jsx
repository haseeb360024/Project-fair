import React from 'react'
import Header from '../Components/Header'
import Profile from '../Components/Profile'
import MyProject from '../Components/MyProject'

function Dashboard() {
  return (
    <div>
      <Header insideDashboard/>
      <div style={{marginTop:"100px"}} className="row d-flex container-fluid">
            <div className='col-lg-8'>
              <h1>Welcome <span className='text-warning'>User</span></h1>
              <MyProject/>
            </div>
            <div className='col-lg-4 mb-5'><Profile/></div>
        </div>
    </div>
  )
}

export default Dashboard