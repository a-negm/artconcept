//import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <div className="navbar-container">
          <Link to="/" className='navbar-logo'>
            TRVL <i className="fab fa-typo3" />
          </Link>
        </div>
      </nav>
    </>
  )
}
