import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Debug from 'debug'
import {getMoviesByGenre,changeLocation} from "../redux/action-creators"

const debug = Debug('genrelist')

class GenreList extends Component {

  genreClick = (e,genre) => {
    e.preventDefault()
    this.props.changeLocation('movies')
    this.props.getMoviesByGenre(genre)
  }

  render() {
    const {props: {genres}} = this

    return <div>
      <p className='is-size-2 has-text-warning'>Choose A Genre</p>
      <ul>
      {genres && genres.length && genres.map(genre => <li key={genre.id}><a href='#' onClick={(e) => this.genreClick(e,genre.id)} >{genre.name}</a></li>)}
    </ul></div>

  }
}



const actionCreators = {
  getMoviesByGenre,
  changeLocation,
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

