import { combineReducers } from 'redux';

// reducers
import genre from './genre-reducer.js';
import cart from './cart-reducer.js';
import movies from './movies-reducer.js';

export const initialState = {
  genres: {},
  movies: {},
  cart: {},

};

const rootReducer = combineReducers({
  genre,
  cart,
  movies
});

export default rootReducer;
