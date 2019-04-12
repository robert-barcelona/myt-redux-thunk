

import * as Debug from 'debug'
import {GET_MOVIES_SUCCESS} from "./action-types"

const debug = Debug('movies-reducer')

export const initialState = {
};


function reducer(state = initialState, action) {

  switch (action.type) {

    case GET_MOVIES_SUCCESS:
      debug('in movies-reducer',action.data)

      return {...state,data: action.data}

    default:
      return state;
  }
}

export default reducer;
