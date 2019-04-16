import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import Link from 'next/link'

import {changeLocation} from "../redux/action-creators"

const Header = props => (
  <Fragment>
    <div className='hero is-info bigBanner'>
      <div className='hero-body'><h1 className='title'>Movies Online!</h1></div>
    </div>
    <section className='section'>
      <div className='container'>
        <Link href="/">
          <a>Movies <i className="fas  fa-search"></i></a>
        </Link>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <Link href="/cart">
          <a>Cart <i className="fas  fa-shopping-cart"></i></a>
        </Link>
      </div>
    </section>
    <style jsx>{`.bigBanner {background: url(http://bohmtheatre.org/wp-content/uploads/2015/09/film-banner.jpg);
                  background-position: -450px;
                  }
                   h1 {color: gold !important}`}</style>
  </Fragment>


)


export default connect(null, {changeLocation})(Header)
