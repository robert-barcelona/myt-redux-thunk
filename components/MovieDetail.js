import React from 'react'
import {connect} from 'react-redux'
import * as Debug from 'debug'
import swal from 'sweetalert';

import {addMovieToCart, changeLocation} from "../redux/action-creators"

const debug = Debug('movie-detail')


const MovieDetail = props => {


  const {changeLocation, addMovieToCart, movieDetail: {original_title, overview, poster_path, release_date, vote_average, id}} = props

  return (<div>
      <span onClick={() => changeLocation('movies')} className="icon">
  <i className="fas fa-2x fa-arrow-circle-left"></i>
</span>

    <div className="card">
      <div className="card-content">
        {poster_path ? <div className="media">
          <div className="media-left">
            <figure className="image ">
              <img src={`http://image.tmdb.org/t/p/w154/${poster_path}`} alt={original_title}/>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{original_title}</p>
          </div>
        </div> : <p>No image provided</p>}

        <div className="content">
          Description: {overview ? overview : 'No description'}
          <br/>
          <time dateTime="2016-1-1">Release date: {release_date}</time>
          <p className="">Average Rating: {vote_average}</p>
          <br/>
          <span onClick={() => {
            addMovieToCart(original_title, id, poster_path)
            swal('Now we have some movies to watch!', `"${original_title}" was added to the cart`,'success')
          }} className="icon">
      <i className="fas fa-2x  fa-cart-plus"></i>
      </span>

        </div>
      </div>
    </div>
  </div>)


}

const actionCreators = {
  addMovieToCart,
  changeLocation,
}

const mapStateToProps = state => ({
  movieDetail: state.movieDetail
})


export default connect(mapStateToProps, actionCreators)(MovieDetail)
