import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";
import "./TopSong.css";

function TopSong() {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [dor, setDor] = useState("");

  const [newArtist, setNewArtist] = useState("");

  const [songsList, setSongsList] = useState([]);

  

  const getSongs = () => {
    Axios.get("http://localhost:3000/songs1").then((response) => {
      setSongsList(response.data);
    });
  };

  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  getSongs()
    return () => { ignore = true; }
    },[songsList]);


  return (
    <div className="App">
      <div className="information">
     
      </div>
      <div className="songs">

        {songsList.map((val, key) => {
          return (
            <div className="songs">
              <div>
              {/* <h5 style="display:'inline'"> What the... </h5><h1 style="display:inline;"> heck is going on? </h1> */}
                <h3>Name: {val.name}</h3>
                <h3>Artist: {val.artist}</h3>
                <h3>dor: {val.dor}</h3>

              </div>
              <div>
                
                 
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopSong;
