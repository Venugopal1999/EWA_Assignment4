// reducers/index.js

import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
//import cartReducer from './cartReducer'; // Import your cartReducer and any other reducers

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if needed
});

export default rootReducer;
