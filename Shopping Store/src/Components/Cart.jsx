import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder, removeFromCart } from '../Redux/storeSlice';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const productsCard = useSelector((state) => state.storeSlice.addToCart);
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.storeSlice.totalPrice);
  const navigate = useNavigate();
  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const cards = productsCard.map((product) => (
    <div className="card col-md-3 col-lg-3 mb-3" key={product.id}>
      <img className="card-img-top d-flex justify-content-center align-items-center" src={product.image} alt="Card image cap" style={{ width: "40%" }} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>{product.description}</p>
        <p className="card-text h6">Price : ${product.price}</p>
      </div>
      <div className='d-flex justify-content-center'>
        <button className="btn btn-outline-warning d-flex align-items-center my-3"
          onClick={() => handleRemoveItem(product.id)}>Remove item</button>
      </div>
    </div>
  ));

  return (
    <div className='my-5'>
      <h1 className='text-center mt-5 mt-sm-5 mt-md-5'>Your Cart</h1>
      <h3 className="text-center">Checkout Total Amount : ${totalPrice} </h3>
      <div className="row justify-content-center">
        {cards}
      </div>
      <div className='d-flex justify-content-center'>
            <button className="btn btn-outline-primary d-flex align-items-center my-3"
              onClick={() => navigate('/')}>Continue Shopping</button>
      </div>
      <div className='d-flex justify-content-center'>
            <button className="btn btn-outline-primary d-flex align-items-center my-3"
              onClick={() => dispatch(placeOrder()) && navigate('/orders')}>Place Order</button>
      </div>
    </div>
  );
}
