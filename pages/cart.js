import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Debug from 'debug'



const debug = Debug('index')

class Cart extends Component {


  render() {
    const {props: {items}} = this

    return <section className="section">
      <p className='is-size-2 has-text-primary'>The Movies in Your Cart</p>

      <div className="container">
        <ul>
        {items.map((item,i) =><li key={item.id}>{i+1}. {item.title}</li>)}
        </ul>
      </div>
    </section>
  }
}

const mapStateToProps = state => ({items: state.cart.items})


export default connect(mapStateToProps)(Cart)
