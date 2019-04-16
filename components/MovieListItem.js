import React from 'react'


export default props => {

  const {title,id, poster, clickFunc = () => {}} = props

  return (<div className="card">
    <div className="card-content">
      <a href='#' onClick={(e) => clickFunc(e, id)}>{title}
        &nbsp; {poster &&
        <img src={`http://image.tmdb.org/t/p/w45/${poster}`} alt={title}/>}
      </a>
    </div>
  </div>)
}
