import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import {BiReset} from 'react-icons/bi';
import {
  removeFromCart,
  clearAll,
  pushToCart,
  decreaseItem,
} from "../../store/shoppingSlice";

import Empty from "../../assets/images/empty_cart.png";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

function Cart() {

  
const [singProd, setSingProd] = useState([])


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);



const [disable, setDisable] = useState(false);


const getVal= (evt) => {

  evt.target.value?setDisable(true):setDisable(false);

}

  const products = useSelector((state) => state.cart.productList);


  const dispatch = useDispatch();

  const removeSelected = (product) => {
    dispatch(removeFromCart(product));
  };

  const total = products.reduce((acc, index) => {
    acc += index.price * index.quantity;
    return acc;
  }, 0);

  const reset = (product) => {
    dispatch(clearAll(product));
  };

  const addMore = (prod) => {
    dispatch(pushToCart(prod));
  };

  const decreaseProduct = (prod) => {
    prod.quantity > 1 && dispatch(decreaseItem(prod));
  };

  if (products.length === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={Empty} className="w-100 m-auto" alt="" />
          </div>

          <div className="col-md-6 d-flex algin-items-center">
            <h3 className="mt-5 text-danger">Your Card Is Empty</h3>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        {products.map((item) => {
          return (
            <div key={item.id} className="col-md-10 mb-4 mx-auto d-flex">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-center">
                  <img src={item.image} className="w-50" alt="" />
                </div>
                <div className="col-md-5 d-flex align-items-center justify-content-around">
                  <div>
                    <button
                      onClick={() => addMore(item)}
                      className="btn btn-success"
                    >
                      +
                    </button>
                  </div>

                  <div className="fs-4 text-center">
                    <p className="mb-0 fw-bold text-secondary">
                      {item.quantity}
                    </p>
                    quntity
                  </div>

                  <div>
                    <button
                      onClick={() => decreaseProduct(item)}
                      className="btn btn-warning"
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-between">
                  <div className="fw-bold"> {item.price * item.quantity} EGP</div>
                  <button
                    onClick={() => removeSelected(item)}
                    className="btn btn-danger"
                  >
                    {" "}
                    <BsFillTrashFill />{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-md-7 mx-auto d-flex justify-content-between algin-items-center p-3 border border-1 my-5">
          <button
            className="btn btn-outline-danger "
            onClick={() => reset(products)}
          >
           Clear All <BiReset/>
          </button>
          <div className="text-center my-1 fw-bold">
         
            Toatl Price: {total.toFixed(2)} EGP
          </div>

          <Button variant="outline-warning" className="my-3" onClick={handleShow}>
        Get This Product Now !!
      </Button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="text-Start " closeButton>
          <Modal.Title className='w-50'>Payment Details</Modal.Title>
          <h4>Total Price: {total.toFixed(2)}</h4>
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
  );
}

export default Cart;
