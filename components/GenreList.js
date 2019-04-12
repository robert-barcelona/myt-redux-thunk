import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Debug from 'debug'

const debug = Debug('GenreList')
import {getMoviesByGenre} from '../redux/action-creators'

class GenreList extends Component {

  genreClick = (e,genre) => {
    e.preventDefault()
    getMoviesByGenre()
    debug('click',genre)
  }

  render() {
    debug('genre')
    const {props: {genres}} = this

    return <ul>
      {genres && genres.length && genres.map(genre => <li key={genre.id}><a href='#' onClick={(e) => this.genreClick(e,genre.id)} >{genre.name}</a></li>)}
    </ul>


  }


}

const mapDispatchToProps = {
  getMoviesByGenre,
}

const mapStateToProps = (state, ownProps) => {
  debug('state', state)
  return ({
    genres: state.genre.data.genres
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenreList)

