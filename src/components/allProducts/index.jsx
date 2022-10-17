import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import './allproducts.css';
import {HiOutlineMagnifyingGlass} from 'react-icons/hi2'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';



function Products(props) {


const [products, setProducts] = useState([])

useEffect(() => {
  getAllProd()
}, [])


const getAllProd = ()=>{
  
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>setProducts(json))

}

  return (
    <Container>

   
    <section className='row'>
      {
        products.map((item) => {
          return(
            <div key={item.id} className="col-md-4">
           <div className="product-container ">
           <div className="image-wraper">
             <Card.Img variant="top" src={item.image} className="w-50"/>
           </div>
             <Card.Body className='py-4 px-2 border-top'>
           
             <Card.Title className="mb-1 border-bottom fs-3 text-start">{item.title}</Card.Title>
             <Card.Text className="fs-4 text-secondary ">
            {item.category}
          </Card.Text>

        <Link to={`/details/${item.id}`}>
          <Button  variant="secondary" className="mb-2 ">
           Get Product Details <span ><HiOutlineMagnifyingGlass /></span>
          </Button>
        </Link> 

        <Button onClick={props.event}  variant="warning" className='text-secondary w-50'>
           Add To Cart <span ><AiOutlineShoppingCart /></span>
          </Button>


          <Card.Footer className='text-end fs-4 mt-3 border-top text-muted'>
          Price :{item.price} Egp
        </Card.Footer>
             </Card.Body>
           
           </div>
            </div>
            )
        })
      }
    </section>
    </Container>
  )
}

export default Products