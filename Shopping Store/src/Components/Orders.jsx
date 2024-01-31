import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Orders = () => {
  const orderValue2 = useSelector((state) => state.storeSlice.orders.length);
  const orderData = useSelector((state) => state.storeSlice.orders);
  const navigate = useNavigate(); 
  const finalOrders = orderData.map((product) => (
    <div className="col-md-4 mb-3" key={product.id}>
      <div className="card">
        <img className="card-img-top" src={product.image} alt="Card image cap" style={{ width: "40%" }} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text h6">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className='mt-5 text-center'>
      <h2>Your Orders</h2>
      <div className='my-5'>
        <h4>You have Ordered {orderValue2} items</h4>
      </div>
      <div className="row">
        {finalOrders}
      </div>
      <div className='m-3'>
        These Products will deliver to your address within 15 days, if not delivered you can register your complaint <a href="mailto:narendravarma97047@gmail.com">here</a>
      </div>
      <div className='h5'>
        In meantime you can order more from here <button className="btn btn-success my-3"
              onClick={() => navigate('/')}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default Orders;
