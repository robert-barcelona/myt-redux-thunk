// import log from 'loglevel';
// import { HOME_LOAD_DATA_SUCCESS } from './action-types';

// log.setLevel('silent');

import * as Debug from 'debug'
import {GET_ITEMS_SUCCESS} from "./action-types"

const debug = Debug('items-reducer')

export const initialState = {
};


function reducer(state = initialState, action) {

  switch (action.type) {

    case GET_ITEMS_SUCCESS:
      debug('in items-reducer',action.data)

      return {...state,data: action.data}

    default:
      return state;
  }
}

export default reducer;
