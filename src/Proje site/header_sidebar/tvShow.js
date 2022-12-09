import React,{useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import { UilArrowLeft } from '@iconscout/react-unicons';
import TopShowDatas from "./tvShows_datas";
import { Link } from "react-router-dom";
import "./tvshow.css";


function TvShow(){
    const[toprated,setTop]=useState([]);
    const URL="https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1";
    useEffect(()=>{
        fetchpopular();
    },[])
    const fetchpopular=async()=>{
        const data=await fetch(URL);
        const toprated=await data.json();
        console.log(toprated);
        setTop(toprated.results);
    }



    return(
        <div>
            <div className="btn">
                <Link to={"/website"}><Button><UilArrowLeft/> Menu</Button></Link>
                
            </div>
            <div className="head">
                <h1 className="text-center">TV SHOWS</h1>
            </div>
            <div className="tv-show">
                {toprated.map((e)=>{
                    return <TopShowDatas key={e.id} {...e}/>
                })}
            </div>
        </div>
    );
}





export default TvShow;