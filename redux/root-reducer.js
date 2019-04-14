import { combineReducers } from 'redux';

// reducers
import genre from './genre-reducer.js';
import cart from './cart-reducer.js';
import movies from './movies-reducer.js';
import movieDetail from './movieDetail-reducer.js';
import apiState from './api-state-reducer.js';
import location from './location-reducer.js';

export const initialState = {
  apiState: {isLoading:false},
  genres: {genres:[],genre:''},
  movies: {results:[]},
  cart: {items:[]},
  movieDetail: {},
  location:{location:'genres'}
};

const rootReducer = combineReducers({
  apiState,
  genre,
  cart,
  movies,
  movieDetail,
  location,
});

export default rootReducer;
