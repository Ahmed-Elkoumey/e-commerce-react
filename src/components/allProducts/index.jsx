import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./allproducts.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pushToCart } from "../../store/shoppingSlice";
import Loader from "../loader";
import { ToastContainer, toast } from "react-toastify";

function Products(props) {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const addToCart = (product) => {

    dispatch(pushToCart(product));
  };

  useEffect(() => {
    getAllProd();
  }, []);

  const getAllProd = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  if (products.length === 0) {
    return <Loader />;
  }

  return (
    <Container>
      <section className="row">
        {products.map((item) => {
          return (
            <div key={item.id} className="col-md-4">
             
              <div className="product-container ">
                <div className="image-wraper">
                  <Card.Img variant="top" src={item.image} className="w-50" />
                </div>
                <Card.Body className="py-4 px-2 border-top">
                  <Card.Title className="mb-1 border-bottom fs-5 pb-3 text-start">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="fs-4 text-secondary text-center">
                    {item.price} Egp
                  </Card.Text>
                  <Container className="d-flex flex-column justify-content-center align-items-center">
                    <Link to={`/details/${item.id}`}>
                      <Button variant="outline-secondary text-warning fw-bold rounded-0">
                        Get Product Details
                        <span>
                          <HiOutlineMagnifyingGlass />
                        </span>
                      </Button>
                    </Link>

                    <Card.Footer className="  mt-3 w-100 border-top ">
                      <Button
                        onClick={() => addToCart(item)}
                        variant="outline-warning"
                        className="text-secondary fw-bold rounded-0 mt-4   d-flex m-auto"
                      >
                        Add To Cart
                        <span className=" ps-1">
                          <AiOutlineShoppingCart className="fs-5" />
                        </span>
                       
                      </Button>
                    </Card.Footer>
                  </Container>
                </Card.Body>
              </div>
            
            </div>
          );
        })}
      </section>
    </Container>
  );
}

export default Products;
