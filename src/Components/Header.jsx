import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header(insideDashboard) {
  return (
    <Navbar style={{backgroundColor:'green'}} className="position-fixed d-flex top-0 w-100 z-1">
    <Container>
      <Navbar.Brand>
        <Link to={'/'} style={{textDecoration:'none' , color:'white'}}
       className='fw-bolder fs-3 '> <i class="fa-brands fa-stack-overflow fa-bounce"></i> Project Fair
      </Link>
     
      
       </Navbar.Brand>
     
     
    </Container>
    {insideDashboard &&
      <div>
      <button className=' btn btn-success'>Log Out <i class="fa-solid fa-right-from-bracket"></i></button>
      </div>
    }
    
  </Navbar>
  )
}

export default Header