import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Debug from 'debug'


import GenreList from '../components/GenreList'

import {getGenres} from "../redux/action-creators"
import MoviesList from "../components/MoviesList"
import MovieDetail from "../components/MovieDetail"

const debug = Debug('index')

class Index extends Component {
  static async getInitialProps({store}) {

    try {
      await store.dispatch(getGenres())
      return {}
    } catch (e) {
      debug(`error in dispatch in index.js: ${e.message}`)
    }
  }


  render() {
    const {props: {location}} = this

    return <section className="section">
      <div className="container">
        {location === 'genres' && <GenreList className="level-right"/>}

        {location === 'movies' && <MoviesList className="level-item"/>}
        {location === 'movie-detail' && <MovieDetail className="level-item"/>}
      </div>
    </section>
  }
}

const mapStateToProps = state => ({location: state.location.location})


export default connect(mapStateToProps)(Index)
