import React from 'react'


export default props => {

  const {title,id, poster, clickFunc = () => {}, count} = props

  return (<div className="card">
    <div className="card-content">
      <a href='#' onClick={(e) => clickFunc(e, id)}>{title}
        &nbsp; {poster &&
        <img src={`http://image.tmdb.org/t/p/w45/${poster}`} alt={title}/>}
      </a>
      {count && <p> <i className="fas  fa-shopping-basket"></i>&nbsp;Quantity: <strong>{count}</strong></p>
      }
    </div>
  </div>)
}
