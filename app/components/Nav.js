import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ isLoggedIn, signOut, clearFavs }) => {
  return (
    <div id="nav-div">
      <Link to='/' className="left">
        Home
      </Link>
      <Link to='/favorites' className="left">
        Favorites
      </Link>
      <Link to='/login' className="right">
        Login
      </Link>

      <button onClick={()=>{
        signOut();
        clearFavs();
      }}
      className="right-button">Sign Out</button>
    </div>
  );
};

Nav.propTypes = {
  isLoggedIn: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  signOut: PropTypes.func,
  clearFavs: PropTypes.func
};

export default Nav;
