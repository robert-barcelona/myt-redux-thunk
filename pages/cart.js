import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Debug from 'debug'
import MovieListItem from "../components/MovieListItem"


const debug = Debug('index')

class Cart extends Component {


  render() {
    const {props: {items}} = this

    return <section className="section">`
      <p className='is-size-2 has-text-primary'>The Movies in Your Cart</p>

      <div className="container">
        <ul>
          {
            items.reduce((acc, currentItem) => {
              let i = acc.findIndex(findItem => findItem.item.ID === currentItem.ID)
              if (i !== -1) {
                acc[i].count += 1
              } else {
                acc.push({count: 1, item: currentItem})
              }
              return acc
            }, []).map((item, j) => <li key={j}><MovieListItem title={item.item.title} poster={item.item.poster_path}
                                                               id={item.item.ID} count={item.count}/></li>)
          }

        </ul>
      </div>
    </section>
  }
}

const mapStateToProps = state => ({items: state.cart.items})


export default connect(mapStateToProps)(Cart)
