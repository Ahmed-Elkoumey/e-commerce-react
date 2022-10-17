import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function Details() {

const [singProd, setSingProd] = useState([])


const param = useParams()
console.log(param)


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
      <div className="col-5">

      <img src={singProd.image} className="w-50 ms-5" alt="" />
      </div>
    
      <div className="col-6">
    <h3 className='border-bottom mb-4 pb-3' >{singProd.title}</h3>
    <p className='fs-5 mb-5 text-secondary'>{singProd.description}</p>
    <p className='fs-3 text-start text-danger fw-bold'>Category :{singProd.category}</p>

    <p className='fs-3 text-end'>Price : {singProd.price} EGP</p>
    <Button variant="outline-warning">Get The Product Now !</Button>
      </div>

    </div>
    </div>
  )
}
