// CancelOrderPage.js


import React from 'react';
import { useLocation } from 'react-router-dom';


const CancelOrderPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get('orderId');

  return (
    <div>
      <h2>Cancel Order</h2>
     <div>
       <p>Your order with orderId {orderId} is cancelled.</p> 
     </div>
      
    </div>
  );
};



export default CancelOrderPage;