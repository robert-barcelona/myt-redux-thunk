import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Debug from 'debug'
import {getMoviesByGenre} from "../redux/action-creators"

const debug = Debug('genrelist')

class GenreList extends Component {

  genreClick = (e,genre) => {
    e.preventDefault()
    debug('click',genre)
    this.props.getMoviesByGenre(genre)
  }

  render() {
    const {props: {genres}} = this

    return <ul>
      {genres && genres.length && genres.map(genre => <li key={genre.id}><a href='#' onClick={(e) => this.genreClick(e,genre.id)} >{genre.name}</a></li>)}
    </ul>

  }
}



const actionCreators = {
  getMoviesByGenre,
}

const mapStateToProps = (state, ownProps) => {
  return ({
    genres: state.genre.genres
  })
}

export default connect(
  mapStateToProps,
  actionCreators,
)(GenreList)

