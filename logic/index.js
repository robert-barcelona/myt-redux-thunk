const axios = require( 'axios')
const APIError = require( './APIError')


const numCheck = (num, name) => {
  if (!num) throw new APIError(`${name} is missing`)
  if (typeof num !== 'number' || num <= 0) throw new APIError(`${name} must be a number greater than 0`)
}

const stringCheck = (string, name) => {
  if (!string) throw new APIError(`${name} is missing`)
  if (typeof string !== 'string') throw new APIError(`${name} must be of type string`)
}


 const logicGetMovies = async (genre, page) => {

  numCheck(genre, 'genre')
  numCheck(page, 'page')

  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=${process.env.API_KEY}&page=${page}&sort_by=vote_average.desc`

  try {
    return await axios.get(url)
  } catch (e) {
    throw new Error(e.message)
  }
}
 const logicGetMovieDetail = async (id) => {
  numCheck(id, 'id')


  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`


  try {
    return await axios.get(url)
  } catch (e) {
    throw new APIError(e.message)
  }
}


 const logicGetGenres = async () => {

  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`
  return await axios.get(url)

}

module.exports = {logicGetMovieDetail,logicGetGenres,logicGetMovies}
