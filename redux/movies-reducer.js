import * as Debug from 'debug'
import {GET_MOVIES_SUCCESS} from "./action-types"
import produce from 'immer'

const debug = Debug('movies-reducer')

export const initialState = {results:[]};


function reducer(state = initialState, action) {

  switch (action.type) {

    case GET_MOVIES_SUCCESS:
      debug('in movies-reducer, state =', action.data)
      const currentMovies = state.results

      return {...state, ...action.data.movies, results:[...currentMovies,...action.data.movies.results]}


    default:
      return state;
  }
}

export default reducer;
