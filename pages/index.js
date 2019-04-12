import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Debug from 'debug'


import {getItems} from "../redux/action-creators"

const debug = Debug('index')

class Index extends Component {
  static async getInitialProps({store}) {
    debug('about to dispatch in index')
    try {
      await store.dispatch(getItems())
      return {}

    } catch(e) {
      debug(`error in dispatch in index.js: ${e.message}`)
    }
  }



  render() {

    return <div>Hi</div>
  }
}




export default connect(state => state)(Index)
