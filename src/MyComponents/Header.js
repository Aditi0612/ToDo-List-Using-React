import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
        {props.searchbar? <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> : "No searchBar"}
      </div>
    </div>
  </nav>
  )
}

//Default Props----By default we give this value to title if user doesn't 
//pass a title

Header.defaultProps={
  title: "Your Title Here",
  searchbar: true
}


//we need to keep title as string. Helps in finding bugs.
//It gives warning whenever string is not used in title or
//bool as searchBar
//isRequired--means mandatory to pass something on user end
Header.propTypes ={
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired
}


//props- Javascript object passed from parent component to child component

