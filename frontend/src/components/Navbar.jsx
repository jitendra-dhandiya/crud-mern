import React from 'react'
import { useSelector } from 'react-redux';
import {Link}  from 'react-router-dom'
import { selectUsers } from '../features/userDetailSlice';

const Navbar = () => {
  const allUsers = useSelector(selectUsers);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <h4 className="navbar-brand">React-Redux</h4>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link">
                  All Post {allUsers?.length} 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar