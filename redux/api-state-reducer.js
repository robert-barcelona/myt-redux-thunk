

import * as Debug from 'debug'
import {GET_GENRE_SUCCESS} from "./action-types"
import {GET_MOVIES_SUCCESS} from "./action-types"
import {GET_MOVIE_DETAIL_SUCCESS} from "./action-types"
import {CALLING_API} from "./action-types"
import {ERROR} from "./action-types"

const debug = Debug('main-reducer')

export const initialState = {isLoading:false}


function reducer(state = initialState, action) {

  switch (action.type) {

    case GET_GENRE_SUCCESS:
    case GET_MOVIE_DETAIL_SUCCESS:
    case GET_MOVIES_SUCCESS:
    case ERROR:
      return {isLoading:false}

    case CALLING_API:
      return {isLoading:true}

    default:
      return state;
  }
}

export default reducer;
