

import * as Debug from 'debug'
import {CHANGE_LOCATION} from "./action-types"


const debug = Debug('location-reducer')

export const initialState = {location:'genres'}


function reducer(state = initialState, action) {

  switch (action.type) {

    case CHANGE_LOCATION:
      return {location:action.data}

    default:
      return state;
  }
}

export default reducer;
