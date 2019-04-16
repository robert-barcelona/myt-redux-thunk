import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Debug from 'debug'
import {getMovieDetail, loadMoreMovies, changeLocation} from "../redux/action-creators"
import {Waypoint} from "react-waypoint"
import MovieListItem from './MovieListItem'

const debug = Debug('movielist')

class MoviesList extends Component {

  movieClick = (e, id) => {
    e.preventDefault()
    this.props.changeLocation('movie-detail')
    this.props.getMovieDetail(id)
  }

  componentDidMount() {
    debug('movie list did mount')
  }

  render() {
    const {props: {moreMovies, isLoading, movies, changeLocation, loadMoreMovies}} = this

    return <div>
      <p className='is-size-2 has-text-warning'>Choose A Movie</p>

      <span onClick={() => changeLocation('genres')} className="icon">
  <i className="fas fa-2x fa-arrow-circle-left"></i>
</span>

      <ul>
        {movies && movies.length && movies.map(movie => <li key={movie.id}>
          <MovieListItem title={movie.title} poster={movie.poster_path} id={movie.id} clickFunc={this.movieClick}  />
        </li>)}
      </ul>
      <Waypoint onEnter={({previousPosition, currentPosition, event}) => {
        debug('waypoint entered', previousPosition, currentPosition, event, isLoading)
        if (!isLoading && event) loadMoreMovies()
      }}
      />
      {moreMovies && <span onClick={loadMoreMovies} className="icon">
  <i className="fas fa-plus-circle"></i>
</span>}
    </div>
  }
}


const actionCreators = {
  getMovieDetail,
  loadMoreMovies,
  changeLocation,
}

const mapStateToProps = (state, ownProps) => {
  return ({
    movies: state.movies.results,
    isLoading: state.apiState.isLoading,
    moreMovies: state.movies.page < state.movies.total_pages
  })
}

export default connect(
  mapStateToProps,
  actionCreators,
)(MoviesList)

