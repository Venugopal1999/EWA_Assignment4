// export const initialCartState = [];

// export const CartTypes = {
//   ADD: 'ADD',
//   REMOVE: 'REMOVE',
// };

// const findItem = (cart, itemId) => cart.find((item) => item.itemId === itemId);

// export const cartReducer = (state, action) => {
//   switch (action.type) {
//     case CartTypes.ADD:
//       if (findItem(state, action.itemId)) {
//         return state.map((item) => (item.itemId === action.itemId
//           ? { ...item, quantity: item.quantity + 1 }
//           : item));
//       }
//       console.log("venu");
//       return [
//         ...state,
//         { itemId: action.itemId, quantity: 1 },
//       ];
//     case CartTypes.REMOVE:
//       return state.filter((item) => item.itemId !== action.itemId);
//     default:
//       throw new Error(`Invalid action type ${action.type}`);
//   }
// };


export const initialCartState = []; // Define your initial state

export const CartTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
};

const findItem = (cart, itemId) => cart.find((item) => item.itemId === itemId);

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case CartTypes.ADD:
      if (findItem(state, action.itemId)) {
        return state.map((item) =>
          item.itemId === action.itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...state,
        { itemId: action.itemId, quantity: 1 },
      ];
    case CartTypes.REMOVE:
      return state.filter((item) => item.itemId !== action.itemId);
    default:
      return state; // Return the current state for unknown action types
  }
};

  