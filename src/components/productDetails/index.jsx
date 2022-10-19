import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function Details() {

const [singProd, setSingProd] = useState([])


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);



const [disable, setDisable] = useState(false);


const getVal= (evt) => {

  evt.target.value?setDisable(true):setDisable(false);

}

const param = useParams()



useEffect(() => {
  

  return () => {
    getSinglProduct()
  }
}, [])


const getSinglProduct =() =>{
  fetch(`https://fakestoreapi.com/products/${param.id}`)
            .then(res=>res.json())
            .then(json=>setSingProd(json))
}



  return (
    <div className="container">

    <div className='row'>
      <div className="col-md-6 d-flex">

      <img src={singProd.image} className="w-50 ms-5" alt="" />
      </div>
    
      <div className="col-md-6">
    <h3 className='border-bottom mb-4 pb-3' >{singProd.title}</h3>
    <p className='fs-5 mb-5 text-secondary'>{singProd.description}</p>
    <p className='fs-3 text-start text-danger fw-bold'>Category :{singProd.category}</p>

    <p className='fs-3 text-end'>Price : {singProd.price} EGP</p>
    <Button variant="outline-warning" className="my-3" onClick={handleShow}>
        Get This Product Now !!
      </Button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="text-center" closeButton>
          <Modal.Title className='w-100'>Payment Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={getVal} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Card Number</Form.Label>
        <Form.Control type="number" placeholder="Your Card Number" />
      </Form.Group>

      <Form.Group className="mt-4 d-flex justify-content-around">
      <Row>
        <Col>
        <Form.Label>Expiry Date</Form.Label>
          <Form.Control type="date" placeholder="MM/YYYY" />
        </Col>
        <Col>
        <Form.Label>CVV/CVC</Form.Label>
          <Form.Control placeholder="**/**" onChange={getVal}/>
        </Col>
      </Row>
      </Form.Group>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outline-success" onClick={handleClose} disabled={!disable}>Submit Payment Opration</Button>
        </Modal.Footer>
      </Modal>
      </div>

    </div>
    </div>
  )
}
