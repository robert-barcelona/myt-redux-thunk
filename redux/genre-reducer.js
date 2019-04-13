

import * as Debug from 'debug'
import {GET_GENRE_SUCCESS,GET_MOVIES_SUCCESS} from "./action-types"

const debug = Debug('items-reducer')

export const initialState = {genres:[],genre:''}


function reducer(state = initialState, action) {

  switch (action.type) {

    case GET_GENRE_SUCCESS:
      debug('in genre-reducer',action.data)

      return {genres:action.data.genres, genre:''}

    case GET_MOVIES_SUCCESS:
      return {...state, genre:action.data.genre}

    default:
      return state;
  }
}

export default reducer;
