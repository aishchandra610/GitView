import React from 'react'
import "../../public/Css/Navbar.css"
import { Link } from 'react-router-dom'

function Navbar({ user }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='main-page'>
        {/* <div className='nav-inner-box'> */}
          <div className='img-profile'><img src={user.avatar_url}
            width='50' height='50'
            alt="user" /></div>

          <h3 style={{ color: "white" }}>{user.name}</h3>
          <div className='search-btn-main'>
            <div className='search-btn'><Link to="/" className='link' >Search</Link></div>
          </div>
        {/* </div> */}
      </nav>
    </>
  )
}

export default Navbar;