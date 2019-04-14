import {
  GET_GENRE_SUCCESS,
  GET_MOVIES_SUCCESS,
  ERROR,
  GET_MOVIE_DETAIL_SUCCESS,
  CALLING_API,
  CLEAR_MOVIES, ADD_MOVIE_TO_CART, CHANGE_LOCATION
} from "./action-types"
import axios from 'axios'
import * as Debug from 'debug'

const debug = Debug('action-creators')


export const clearMovies = () => ({type: CLEAR_MOVIES})

export const callingAPI = () => ({type: CALLING_API})
export const error = () => ({type: ERROR})

export const getGenresSuccess = (data) => ({type: GET_GENRE_SUCCESS, data});


export const getGenres = () => async (dispatch) => {
  try {
    debug('about to fetch', process.env.API_KEY)
    dispatch(callingAPI())
    const data = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`)
    dispatch(getGenresSuccess(data.data))

  } catch (e) {
    debug(`error in dispatch in action-creators. getGenres: ${e}`)
    dispatch(error())
  }
}

export const getMoviesSuccess = (movies, genre) => ({type: GET_MOVIES_SUCCESS, data: {movies, genre}});

export const getMoviesByGenre = (genre) => async (dispatch) => {
  try {
    dispatch(callingAPI())
    dispatch(clearMovies())
    debug('about to fetch movies by genre', genre)

    let data = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=${process.env.API_KEY}&sort_by=vote_average.desc`)
    dispatch(getMoviesSuccess(data.data, genre))

    //  Hack to fill up screen so infinite scroll works with current method Waystation
    //  Need to find better way but let's do this for now
    for (let i = 2; i < 4; i++) {
      data = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=${process.env.API_KEY}&page=${i}&sort_by=vote_average.desc`)
      dispatch(getMoviesSuccess(data.data, genre))
    }
  } catch (e) {
    debug(`error in dispatch in action-creators. getMoviesByGenre: ${e}`)
    dispatch(error())

  }
}

export const loadMoreMovies = () => async (dispatch, getState) => {
  let {page, total_pages} = getState().movies
  debug('loadMoreMovies, page:', page, 'total_pages:', total_pages)

  if (page < total_pages) {
    const genre = getState().genre.genre
    try {
      const nextPage = page + 1
      const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=${process.env.API_KEY}&page=${nextPage}&sort_by=vote_average.desc`)
      dispatch(getMoviesSuccess(data.data, genre))
    } catch (e) {
      debug(`error in dispatch in action-creators. loadMoreMovies: ${e}`)
      dispatch(error())
    }
  }
}

export const getMovieDetailSuccess = data => ({type: GET_MOVIE_DETAIL_SUCCESS, data})

export const getMovieDetail = movieId => async (dispatch) => {
  try {
    dispatch(callingAPI())
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    dispatch(getMovieDetailSuccess(data.data))
  } catch (e) {
    debug(`error in dispatch in action-creators. getMovieDetail: ${e}`)
    dispatch(error())

  }
}


export const addMovieToCart = (title, ID) => ({type: ADD_MOVIE_TO_CART, data:{title,ID}})

export const changeLocation = location => ({type: CHANGE_LOCATION, data:location})
