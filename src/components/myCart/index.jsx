import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { removeFromCart,clearAll } from "../../store/shoppingSlice";
import Empty from "../../assets/images/empty_cart.png";

function Cart() {

    const products = useSelector((state) => state.cart.productList);
  
    const [cuonter, setcuonter] = useState(0);
  

  const dispatch = useDispatch();

  const removeSelected = (product) => {
    dispatch(removeFromCart(product));
  };

  const total =products.reduce((acc,index)=>{
    acc+=index.price * index.quantity;
    return acc;
  },0)

const reset =(product)=>{
  dispatch(clearAll(product))
}

const addMore = (prod)=>{

  setcuonter(prod.quantity);
  
}





if (products.length === 0) {
  return (<div className="container">
    <div className="row">
    <div className="col-md-6">
<img src={Empty} className="w-100 m-auto" alt="" /> 
  </div>

  <div className="col-md-6 d-flex algin-items-center">
    <h3 className="mt-5 text-danger">Your Card Is Empty</h3>
  </div>
  </div>
  </div>);
}
  return (
    <div className="container">
      <div className="row">
        {products.map((item) => {
          return (
            <div key={item.id} className="col-md-10 mb-4 mx-auto">
              <div className="row">
                <div className="col-md-3">
                  <img src={item.image} width="100" alt="" />
                </div>
                <div className="col-md-5 d-flex align-items-center justify-content-around">
                  <div>
                    <button onClick={()=>addMore(item)} className="btn btn-success">
                      +
                  </button>
                  </div>

                  <div className="fs-4 text-center">
                    <p className="mb-0 fw-bold text-secondary">{cuonter}</p>
                    quntity
                  </div>

                  <div>
                    <button className="btn btn-warning">
                      -
                    </button>
                  </div>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-around">
                  <div> {item.price * item.quantity} EGP</div>
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
        <div className="col-md-5 mx-auto d-flex justify-content-between algin-items-center">
          <button className="btn btn-outline-danger w-25" onClick={()=>reset(products)}> Clear All</button>
          <div className="text-center my-1"> Toatl Price: {total.toFixed(2)} EGP</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
