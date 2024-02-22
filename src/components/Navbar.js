import React from 'react';
import "./Navbar.css";
const Navbar = () => {
  return(
    <div className='homepage'>
    <div className='flex-container'>
    <h1 className='brand-title'>WATCHFLIX</h1>
    <b className="watchflix">
      </b>
      <b className="watchflix1">
        <span>Watch</span>
        <span className="flix">Flix</span>
      </b>
    <span className='brand-title1'> Movies</span>
    <span className='brand-title1'> Tv shows</span>
    <span className='brand-title1'>Documantation</span>
    <span className='brand-title1'> Catagories</span>
    <img className="bxbx-search-icon1" alt="" src="/bxbxsearch.svg" />
    <img className="bxbx-search-icon2"
            alt=""
            src="/claritybelloutlinebadged.svg"
          />
    <div className='auth-buttons'>
      <button className='sign-in-button'>Sign In</button>
      <button className='sign-up-button'>Sign Up</button>
    </div>
  </div>
  </div>
);
};
export default Navbar;