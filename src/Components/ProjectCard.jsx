import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import projectPic from '../Assets/pr1.png'

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src={projectPic} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
      </Card.Body>
    </Card>

<Modal size='lg' show={show} onHide={handleClose}>

    <Modal.Header closeButton>
        <Modal.Title>Media Player</Modal.Title>
    </Modal.Header>
    <Modal.Body> 
     <Row>
        <Col>
            <img style={{height:'200px'}} className='img-fluid' src={projectPic} alt="project image" />
        </Col>
        <Col md={6}>
            <h2>Media Player</h2>
            <p>sdfsdjsdsd  dgvsdfgbs sdhgbsdgvvbsdfg sdfvbds ghsdnafgv vdf sdhfg ufbwefbhs fsdfhfb sdsyhv dfvbubfg sd ghs vsd vsdvsufgs nsd vujsdvg n vhdsvbds vsdjhvdbsvsdbn ms bvuiosdvb vjsdivsivsdkvbisv sdjvbnsigvsdmvsd hn</p>
            <p>Language Used: <span className='fw-bolder'> HTML, CSS ,React</span></p>


        </Col>
        </Row>   

        <div className='mt-3'>
            <a href="https://github.com/haseeb360024/Project-fair" target='_blank' className='me-3 btn'> <i className='fa-brands fa-github fa-2x'></i></a>
            <a href="https://e-kart-brown.vercel.app/" target='_blank' className='me-5 btn'> <i className='fa-solid fa-link fa-2x'></i></a>
        </div>
    </Modal.Body>
</Modal>

    </>
  )
}

export default ProjectCard