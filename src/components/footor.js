import React from 'react';
import "./footor.css";
const footor = () => 
{
return(
<>
<b className="watchflix">
        <span>Watch</span>
        <span className="flix">Flix</span>
      </b>
      <b className="watchflix1">
        <span>Watch</span>
        <span className="flix">Flix</span>
      </b>
      <div className="homepage-inner">
        <div className="tv-series-parent">
          <div className="tv-series">TV Series</div>
          <div className="documentaries">Documentaries</div>
          <div className="categories">Categories</div>
          <div className="movies-parent">
            <b className="account">Movies</b>
            <div className="rectangle-div" />
          </div>
        </div>
      </div>
</>
    );
};

export default footor;