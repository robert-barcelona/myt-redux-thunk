import {GET_ITEMS_SUCCESS} from "./action-types"
import axios from 'axios'
import * as Debug from 'debug'
const debug = Debug('action-creators')
export const getItemsSuccess = (data) => ({ type: GET_ITEMS_SUCCESS, data });


export const getItems = () => async (dispatch,getState) => {
  try {
    debug('about to fetch')

    const data = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=0283695311dfd266eccc0d7f49398c58`)
     dispatch(getItemsSuccess(data.data))

  } catch(e) {
    debug(`error in dispatch in action-creators: ${e}`)
  }
}
