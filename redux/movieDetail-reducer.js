import * as Debug from 'debug'
import {GET_MOVIE_DETAIL_SUCCESS} from "./action-types"
import produce from 'immer'

const debug = Debug('movieDetail-reducer')

export const initialState = {};


function reducer(state = initialState, action) {

  switch (action.type) {

    case GET_MOVIE_DETAIL_SUCCESS:
      debug('in movieDetail-reducer, state =', state)

      return {...state, ...action.data}


    default:
      return state;
  }
}

export default reducer;
