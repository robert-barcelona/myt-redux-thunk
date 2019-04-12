

import * as Debug from 'debug'
import {GET_GENRE_SUCCESS} from "./action-types"

const debug = Debug('items-reducer')

export const initialState = {
};


function reducer(state = initialState, action) {

  switch (action.type) {

    case GET_GENRE_SUCCESS:
      debug('in genre-reducer',action.data)

      return {...state,data: action.data}

    default:
      return state;
  }
}

export default reducer;
