import axios from 'axios'
import * as Debug from 'debug'

import {
  GET_GENRE_SUCCESS,
  GET_MOVIES_SUCCESS,
  ERROR,
  GET_MOVIE_DETAIL_SUCCESS,
  CALLING_API,
  CLEAR_MOVIES, ADD_MOVIE_TO_CART, CHANGE_LOCATION
} from "./action-types"

import {logicGetMovies, logicGetMovieDetail, logicGetGenres} from "../logic"

const debug = Debug('action-creators')


export const clearMovies = () => ({type: CLEAR_MOVIES})

export const callingAPI = () => ({type: CALLING_API})
export const error = () => ({type: ERROR})

export const getGenresSuccess = (data) => ({type: GET_GENRE_SUCCESS, data});


export const getGenres = () => async (dispatch) => {
  try {
    debug('about to fetch', process.env.API_KEY)
    dispatch(callingAPI())
    const data = await logicGetGenres()
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
    let data = await logicGetMovies(genre, 1)
    dispatch(getMoviesSuccess(data.data, genre))

    //  Hack to fill up screen so infinite scroll works with current method Waystation
    //  Need to find better way but let's do this for now
    for (let i = 2; i < 4; i++) {
      data = await logicGetMovies(genre, i)
      dispatch(getMoviesSuccess(data.data, genre))
    }
  } catch (e) {
    debug(`error in dispatch in action-creators. getMoviesByGenre: ${e}`)
    dispatch(error())

  }
}

export const loadMoreMovies = () => async (dispatch, getState) => {
  let {page, total_pages} = getState().movies

  if (page < total_pages) {
    const genre = getState().genre.genre
    try {
      const nextPage = page + 1
      const data = await logicGetMovies(genere, nextPage)
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
    debug(movieId)
    const data = await logicGetMovieDetail(movieId)
    dispatch(getMovieDetailSuccess(data.data))
  } catch (e) {
    debug(`error in dispatch in action-creators. getMovieDetail: ${e}`)
    dispatch(error())

  }
}


export const addMovieToCart = (title, ID, poster_path) => ({type: ADD_MOVIE_TO_CART, data: {title, ID, poster_path}})

export const changeLocation = location => ({type: CHANGE_LOCATION, data: location})
