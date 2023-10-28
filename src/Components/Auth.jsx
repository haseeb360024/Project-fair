import React from 'react'
import {  Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
function Auth(register) {
     const isRegisterForm = register?true:false
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='w-75 container'>
        <Link to={'/'} style={{textDecoration:'none',color:'blue'}}> <i class="fa-solid fa-arrow-left me-1"></i> Back to Home</Link>
        <div className='card shadow p-5 bg-success'> 
        <div className='row align-items-center'>
            <div className='col-lg-6'>
                <img src="http://www.tropiqana.com/fundsmanager/app-assets/img/gallery/login.png" className='rounded-start w-100' alt="" />
            </div>
            <div className='col-lg-6'>
                <div className='d-flex align-items-center flex-column'>
                    <h1 className='fw-bolder text-light mt-2'> <i class="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</h1>
                    <h5 className='fw-bolder mt-4 pb-3 text-light'>
                        {
                            isRegisterForm ? 'Sign up to your Account ':'Sign up to you Account'
                        }
                    </h5>
                    <Form className='text-light w-100'>
                        {
                            isRegisterForm &&
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="text" placeholder="Username" />
                          </Form.Group>
                        }
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email ID" />
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formBasicpaswd">
                            <Form.Control type="email" placeholder="Entter Password" />
                         </Form.Group>
                         {
                            isRegisterForm ? 
                            <div className='mt-3'>
                                <button className='btn btn-light mb-2'>Register</button>
                                <p>Already Have Account? Click here to <Link to={'/login'}>Login</Link></p>
                            </div>:
                            <div className='mt-3'>
                            <button className='btn btn-light mb-2'>Login</button>
                            <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
                        </div>
                         }
                         </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Auth