import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const cartCount = useSelector((state) => state.storeSlice.addToCart.length)
  const orderValue = useSelector((state)=> state.storeSlice.orders.length)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5">
      <Link to="/" className="navbar-brand h1 mx-2 mx-lg-5">Store</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto mx-2 mx-lg-5">
          <Link to="/" className="nav-item nav-link active h2 mx-5 mx-lg-5">Home <span className="sr-only">(current)</span></Link>
        </div>
        <div className='ms-auto  btn btn-outline-primary '>
          <Link to="/cart" className="nav-item nav-link active ms-auto mx-5 mx-sm-5">Bag {cartCount}</Link>
          </div>
          <div className=" btn  btn-outline-primary mx-3">
          <Link to="/orders" className="nav-item nav-link active ms-auto mx-5 mx-sm-5">Orders {orderValue}</Link>
          </div>
      </div> 
    </nav>
  );
}
