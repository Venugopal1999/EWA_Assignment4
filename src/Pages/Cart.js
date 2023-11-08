import React from 'react'
import CartRow from './CartRow';
import all_product from '../Components/Assets/all_product';
import PropTypes from 'prop-types';

const Cart = ({ cart, dispatch, items }) => {
    console.log(cart);
    // const subTotal = cart.reduce((acc, item) => {
    //     const detailItem = items.find((i) => i.itemId === item.itemId);
    //     const itemPrice = detailItem.salePrice ?? detailItem.price;
    //     return item.quantity * itemPrice + acc;
    //   }, 0);
    console.log(items);
  return (
    <div className="cart-component">
    <h2>Your Cart</h2>
    {cart.length === 0 ? (
      <div>Your cart is empty.</div>
    ) : (
      <>
        <table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartRow
                key={item.itemId}
                cartItem={item}
                items={items}
                dispatch={dispatch}
              />
            ))}
          </tbody>
        </table>
        <div>
            Subtotal: $
            {100}
          </div>
          <h2>Checkout</h2>
          </>
      )}
    </div>
  );
  
}

Cart.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
      itemId: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })).isRequired,
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(all_product).isRequired,
  };

export default Cart