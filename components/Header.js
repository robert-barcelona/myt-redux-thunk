import react from 'react'
import Link from 'next/link'

const Header = () => (
  <section className='section'>
  <div className='container'>
    <Link href="/">
      <a>Choose Movies  <i className="fas  fa-search"></i></a>
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

export default Header
