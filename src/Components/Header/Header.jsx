import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import '../Header/Header.css'


const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
      <header>
          <NavLink to="/">
              <div className="logo">
                  <h1>Nessa's Braiding</h1>
              </div>
          </NavLink>
          <div className="hamburger" onClick={handleClick}>
              {click ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <nav className={click ? 'navbar active' : 'navbar'}>
              <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
              </ul>
          </nav>
          

      </header>
  );
}


export default Header