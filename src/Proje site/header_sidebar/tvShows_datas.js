import React from "react";
import "./tvshow.css";


function TopShowDatas({vote_average,overview,origin_country,original_name,poster_path}){
    return(
        <div className="container">
            <img src={"https://image.tmdb.org/t/p/w500/"+poster_path} id="img" />
            <h5>{original_name}</h5>
            <h5>{overview}</h5>
            <h5>{origin_country}</h5>
            <h5>{vote_average}</h5>
        </div>
    );
}


export default TopShowDatas