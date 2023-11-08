import PropTypes from 'prop-types';
import { CartTypes } from '../Reducer/cartReducer';
import all_product from '../Components/Assets/all_product';

function CartRow({ cartItem, dispatch, items }) {
  const item = items.find((i) => i.itemId === cartItem.itemId);

  const removeItemFromCart = () => {
    dispatch({ type: CartTypes.REMOVE, itemId: item.itemId });
  };

  return (
    <tr>
      <td>{cartItem.quantity}</td>
      <td>{item.title}</td>
      <td>
        $
        {((item.salePrice ?? item.price) * cartItem.quantity).toFixed(2)}
      </td>
      <td>
        <button
          type="button"
          onClick={removeItemFromCart}
        >
          X
        </button>
      </td>
    </tr>
  );
}

CartRow.propTypes = {
  cartItem: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(all_product).isRequired,
};

export default CartRow;
