import { useState,useEffect } from "react";
import "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UilArrowLeft } from '@iconscout/react-unicons';
import TopRated from "./top_rated";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./most_watched.css";

function MostWatched(){
    const [toprated,setTop]=useState([]);
    const URL="https://api.themoviedb.org/3/movie/top_rated?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1";
    useEffect(()=>{
        fetchpopular();
    },[]);
    const fetchpopular=async()=>{
        const data=await fetch(URL);
        const toprated=await data.json();
        console.log(toprated);
        setTop(toprated.results);
    };

    return(
        <div>
            <div className="btn-1 mt-1">
                    <Link to={"/website"}><Button><UilArrowLeft  /> Main Menu</Button></Link> 
            </div>
            <div className="txt">
                    <h1 className="text-center">Movies Top Rated</h1>
                </div>
            <div className="ctn">
                
                    
                <div className="movie-card">
                    
                    {toprated.map((top)=>{
                        return <TopRated  key={top.id} {...top} />
                    })}
                </div>
            
            </div>
        </div>
        
    );


}

export default MostWatched;