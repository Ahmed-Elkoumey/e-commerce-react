import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/allProducts';
import Login from './components/login';
import Cart from './components/myCart';
import NavBar from './components/navbar';
import Details from './components/productDetails';
import Rgister from './components/register';




function App() {

  const [cartShopping, setCartShopping] = useState(0)

 const  handelAddToCart=()=>{
setCartShopping(prev=>  prev + 1)
console.log('cartShopping')
 }

  return (
<BrowserRouter>
 <NavBar number={cartShopping}/>

<Routes>
  <Route path='/' element={<Products event={handelAddToCart}/>}/>
  <Route path='/details/:id' element={<Details/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Rgister/>}/>
</Routes>

</BrowserRouter>
  );
}

export default App;
