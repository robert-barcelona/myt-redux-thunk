import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Debug from 'debug'
import MovieListItem from "../components/MovieListItem"



const debug = Debug('index')

class Cart extends Component {


  render() {
    const {props: {items}} = this

    return <section className="section">
      <p className='is-size-2 has-text-primary'>The Movies in Your Cart</p>

      <div className="container">
        <ul>
        {items.map((item,i) =><li key={i}><MovieListItem title={item.title} poster={item.poster_path} id={item.id}   />
        </li>)}
        </ul>
      </div>
    </section>
  }
}

const mapStateToProps = state => ({items: state.cart.items})


export default connect(mapStateToProps)(Cart)
