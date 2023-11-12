// ViewOrderPage.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { viewOrder, cancelOrder, getMaxOrderId, viewOrderWithId } from '../Reducer/orderReducer';
import { useNavigate } from 'react-router-dom';

const ViewOrderPage = ({ orders }) => {
  const [orderIdInput, setOrderIdInput] = useState('');
  console.log('Viewing order with ID:', orderIdInput);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [viewOrderTrue, setViewOrderTrue]= useState(false);
  const [orderIdNA,setOrderIdNA] =useState(false);
  const [viewOrder1, setViewOrder1]= useState([]);

  const handleViewOrder = () => {
    // Dispatch the action to view the order with the specified orderId
      const orderId1=Number(orderIdInput);
      console.log("all orders" , orders);
      if(orderId1<= getMaxOrderId(orders)){
       console.log("view order 1", orders[orderId1]);
       setViewOrderTrue(true);
       setViewOrder1(viewOrderWithId(orders,orderId1));

      }
      else{
        setViewOrderTrue(false);
        console.log("Orderid is not available");
        setOrderIdNA(true);

      }
    //dispatch(viewOrder(Number(orderIdInput)));
    //dispatch(viewOrder(parseInt(orderIdInput, 10)));
  };

  const handleCancelOrder = () => {
    // Dispatch the action to cancel the order with the specified orderId
    setOrderIdNA(true);
    dispatch(cancelOrder(Number(orderIdInput)));
    navigate(`/cancelOrderPage?orderId=${orderIdInput}`);
  };

  return (
    <div>
      <h2>View Order</h2>
      <label htmlFor="orderIdInput">Order ID:</label>
      <input
        type="numeric"
        id="orderIdInput"
        value={orderIdInput}
        onChange={(e) => setOrderIdInput(e.target.value)}
      />
      <button onClick={handleViewOrder}>View Order</button>
      {
  viewOrderTrue ? (
    viewOrder1.length > 0 ? (
      <div key={viewOrder1[0].orderId}>
        {/* Display order details here */}
        <p>Order ID: {viewOrder1[0].orderId}</p>
        <p>Cart: {viewOrder1[0].cart[0].id}</p>
        <p>Order Type: {viewOrder1[0].orderType}</p>
        {/* Add more order details */}
        <button onClick={handleCancelOrder}>Cancel Order</button>
        <p>-----------------------------------------</p>
      </div>
    ) : (
      <p>No order found with the specified ID</p>
    )
  ) : (
    orderIdNA ?  <p>No order found with the specified ID</p>:<></>
  )
}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.order, // Get orders from the Redux store
  };
};


export default connect(mapStateToProps)(ViewOrderPage);