import React from 'react'
import {connect} from 'react-redux'
import Link from 'next/link'

import {changeLocation} from "../redux/action-creators"

const Header = props => (
  <section className='section'>
  <div className='container'>
    <Link  href="/">
      <a  >Movies  <i className="fas  fa-search"></i></a>
    </Link>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
    <Link href="/cart">
      <a>Cart  <i className="fas  fa-shopping-cart"></i></a>
    </Link>
  </div>
  </section>
)



export default connect(null,{changeLocation})(Header)
