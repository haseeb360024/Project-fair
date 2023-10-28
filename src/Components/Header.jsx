import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar style={{backgroundColor:'green'}} className="position-fixed top-0 w-100">
    <Container>
      <Navbar.Brand>
        <Link to={'/'} style={{textDecoration:'none' , color:'white'}}
       className='fw-bolder fs-3 '> <i class="fa-brands fa-stack-overflow fa-bounce"></i> Project Fair
      </Link>
       </Navbar.Brand>
     
     
    </Container>
  </Navbar>
  )
}

export default Header