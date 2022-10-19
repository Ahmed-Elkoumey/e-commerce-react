import { useState } from "react";
import { useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";

function Cart() {
  const myGolbalStore = useSelector((state) => state.cart.productList);
  const [quntity, setQuntity] = useState(1);

  const [price, setPrice] = useState(1)

  /*
category
id
"men's clothing"
description
image
price
rating
title
: 
"Mens Cotton Jacket"
*/

  const addMore = (product) => {
    setQuntity((prev) => prev + 1);
   
     setPrice(quntity) 


  };

  const decrement = () => {
    quntity > 0 && setQuntity((prev) => prev - 1);
    quntity > 0 && setPrice(quntity-1)
  };

  return (
    <div className="container">
      <div className="row">
        {myGolbalStore.map((item) => {
          return (
            <div className="col-md-10 m-auto">
              <div className="row">
                <div className="col-md-3">
                  <img src={item.image} width="100" alt="" />
                </div>
                <div className="col-md-5 d-flex align-items-center justify-content-around">
                  <div>
                    <button className="btn btn-success" onClick={addMore}>
                      +
                    </button>
                  </div>

                  <div className="fs-4 text-center">
                  <p className="mb-0 fw-bold text-secondary">Quntity</p>
                    {quntity}
                  </div>

                  <div>
                    <button className="btn btn-warning" onClick={decrement}>
                      -
                    </button>
                  </div>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-around">
                  <div> {item.price * price} </div>
                  <button className="btn btn-danger">
                    {" "}
                    <BsFillTrashFill />{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
