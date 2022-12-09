import React,{useState} from "react";
import { Button,Form,Modal } from "react-bootstrap";

const TopRated=({video,poster_path,vote_average,release_date,overview,title})=>{
    const [show,setShow]=useState(false);
    const HandleClose=()=>setShow(false);
    const HandleShow=()=>setShow(true);
    return(
        <div className="d-flex align-items-start flex-column ">
            <img src={"https://image.tmdb.org/t/p/w500/"+poster_path}></img>
            <label>{title}</label>
            <Button variant="primary" onClick={HandleShow} onChange={HandleShow}>Show Details</Button>
            <Modal show={show} onHide={HandleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title> <img src={"https://image.tmdb.org/t/p/w500/"+poster_path}></img></Modal.Title>
                    <br></br>
                    <Modal.Title>{title}</Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>
                    <label>İmdb:{vote_average}</label>
                    <hr></hr>
                    <label>Release date:{release_date}</label>
                    <br></br>
                    <label><b>Overview:</b> {overview}</label>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={HandleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            
            
            
        </div>
    );
}

export default TopRated;