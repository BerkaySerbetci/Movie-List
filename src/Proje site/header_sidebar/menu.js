import { useState,useEffect } from "react";
import "./menu.css";
import MovieCard from "./MovieCard";
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieResult=()=>{
    const [movies,setMovies]=useState([])
    const URL="https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1";
    useEffect(()=>{
        fetchPopular();
    },[]);
    const fetchPopular=async ()=>{
        const data=await fetch(URL);
        const movies=await data.json();
        console.log(movies);
        setMovies(movies.results);
    };
    return(
        <div>
            <div className="txt">
                <h1>Movies</h1>
            </div>
            <div className="container">
                <div className="popular-movies">
                    {movies.map((movie)=>{
                        return <MovieCard key={movie.id} movie={movie}/>
                    })}
                </div>
            </div>
            
        </div>
    );



}

export default MovieResult;