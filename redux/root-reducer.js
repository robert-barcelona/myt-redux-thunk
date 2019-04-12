import { combineReducers } from 'redux';

// reducers
import items from './items-reducer.js';
import cart from './cart-reducer.js';

export const initialState = {


};

const rootReducer = combineReducers({
  items,
  cart,
});

export default rootReducer;
