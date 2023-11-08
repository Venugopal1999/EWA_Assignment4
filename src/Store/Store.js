// store.js

import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../Reducer';
//import rootReducer from './reducers'; // Import your rootReducer

const store = createStore(rootReducer);

export default store;
