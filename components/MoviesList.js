import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Debug from 'debug'
import {getMovieDetail,loadMoreMovies} from "../redux/action-creators"
import {Waypoint} from "react-waypoint"

const debug = Debug('movielist')

class MoviesList extends Component {

  movieClick = (e, id) => {
    e.preventDefault()
    this.props.getMovieDetail(id)
  }

  render() {
    const {props: {isLoading,movies,loadMoreMovies}} = this

    return <div> <ul>
      {movies && movies.length && movies.map(movie => <li key={movie.id}><a href='#' onClick={(e) => this.movieClick(e,movie.id)} >{movie.title}</a></li>)}
    </ul>
      <Waypoint onEnter={({ previousPosition, currentPosition, event }) => {
        debug('waypoint entered', previousPosition, currentPosition, event)
         if (!isLoading && event) loadMoreMovies()
      }}
      />
  </div>
  }
}



const actionCreators = {
  getMovieDetail,
  loadMoreMovies,
}

const mapStateToProps = (state, ownProps) => {
  return ({
    movies: state.movies.results,
    isLoading:state.apiState.isLoading,
  })
}

export default connect(
  mapStateToProps,
  actionCreators,
)(MoviesList)

