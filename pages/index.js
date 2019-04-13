import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Debug from 'debug'


import GenreList from '../components/GenreList'

import {getGenres} from "../redux/action-creators"
import {isEmpty} from "../utils"
import MoviesList from "../components/MoviesList"
import MovieDetail from "../MovieDetail"

const debug = Debug('index')

class Index extends Component {
  static async getInitialProps({store}) {
    debug('about to dispatch in index', isEmpty(store.getState().genre))

    try {
      await store.dispatch(getGenres())
      return {}
    } catch (e) {
      debug(`error in dispatch in index.js: ${e.message}`)
    }
  }


  render() {

    return <div>
      <GenreList/>
      <MoviesList/>
      <MovieDetail/>
     </div>
  }
}


export default connect(state => state)(Index)
