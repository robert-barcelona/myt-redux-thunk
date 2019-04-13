import {GET_GENRE_SUCCESS, GET_MOVIES_SUCCESS, ERROR,GET_MOVIE_DETAIL_SUCCESS, CALLING_API} from "./action-types"
import axios from 'axios'
import * as Debug from 'debug'
const debug = Debug('action-creators')



export const callingAPI = () => ({type:CALLING_API})
export const error = () => ({type:ERROR})

export const getGenresSuccess = (data) => ({ type: GET_GENRE_SUCCESS, data });


export const getGenres = () => async (dispatch) => {
  try {
    debug('about to fetch', process.env.API_KEY)
    dispatch(callingAPI())
    const data = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`)
    dispatch(getGenresSuccess(data.data))

  } catch(e) {
    debug(`error in dispatch in action-creators. getGenres: ${e}`)
    dispatch(error())
  }
}

export const getMoviesSuccess = (movies,genre) => ({ type: GET_MOVIES_SUCCESS, data:{movies,genre}});

export const getMoviesByGenre = (genre) => async (dispatch) => {
  try {
    dispatch(callingAPI())
    debug('about to fetch movies by genre',genre)

    const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=${process.env.API_KEY}`)
    dispatch(getMoviesSuccess(data.data, genre))

  } catch(e) {
    debug(`error in dispatch in action-creators. getMoviesByGenre: ${e}`)
    dispatch(error())

  }
}

export const loadMoreMovies = () => async (dispatch, getState) => {
  const {page, total_pages} = getState().movies
  debug('loadMoreMovies',page, total_pages)

  if (page < total_pages){
    const genre = getState().genre.genre
    try {
      const nextPage = page + 1
      const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=${process.env.API_KEY}&page=${nextPage}`)
      dispatch(getMoviesSuccess(data.data, genre))
    } catch (e) {
      debug(`error in dispatch in action-creators. loadMoreMovies: ${e}`)
      dispatch(error())
    }
  }
}

export const getMovieDetailSuccess = data => ({type: GET_MOVIE_DETAIL_SUCCESS,  data})

export const getMovieDetail = movieId => async (dispatch) => {
  try {
    dispatch(callingAPI())
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    dispatch(getMovieDetailSuccess(data.data))
  } catch(e) {
    debug(`error in dispatch in action-creators. getMovieDetail: ${e}`)
    dispatch(error())

  }
}
