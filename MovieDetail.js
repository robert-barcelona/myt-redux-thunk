import React from 'react'
import {connect} from 'react-redux'
import * as Debug from 'debug'


const debug = Debug('movie-detail')


const MovieDetail = props => {

  const {movieDetail: {original_title, overview, poster_path, release_date, vote_average}} = props

  return (<div>
    <p>{original_title}</p>
    <p>{overview}</p>
    <p>{release_date}</p>
    <p>{vote_average}</p>
    <img src={`http://image.tmdb.org/t/p/w154/${poster_path}`} alt={original_title}/>
  </div>)


}

const actionCreators = {}

const mapStateToProps = state => ({
  movieDetail: state.movieDetail
})


export default connect(mapStateToProps, actionCreators)(MovieDetail)
