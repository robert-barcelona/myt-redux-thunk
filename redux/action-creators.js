import {GET_GENRE_SUCCESS} from "./action-types"
import axios from 'axios'
import * as Debug from 'debug'
const debug = Debug('action-creators')
export const getGenresSuccess = (data) => ({ type: GET_GENRE_SUCCESS, data });


export const getGenres = () => async (dispatch, getState) => {
  try {
    debug('about to fetch', process.env.API_KEY)

    const data = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`)
    dispatch(getGenresSuccess(data.data))

  } catch(e) {
    debug(`error in dispatch in action-creators: ${e}`)
  }
}



export const getMoviesByGenre = (genre) => async (dispatch, getState) => {
  try {
    debug('about to fetch movies by genre',genre)

    const data = await axios.get(`https://api.themoviedb.org/3//discover/movie?with_genres=${genre}?api_key=${process.env.API_KEY}`)
    dispatch(getGenresSuccess(data.data))

  } catch(e) {
    debug(`error in dispatch in action-creators: ${e}`)
  }
}
