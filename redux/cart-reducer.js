import * as Debug from 'debug';
import {ADD_MOVIE_TO_CART} from "./action-types"

export const initialState = {
  items: []
};


function reducer(state = initialState, action) {
  switch (action.type) {

    case ADD_MOVIE_TO_CART:
      return {items:[...state.items,action.data]}


    default:
      return state;
  }
}

export default reducer;
