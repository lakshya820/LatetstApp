import React from 'react';
import { useState } from "react";
import Axios from "axios";
import "./AddArtist.css"

function AddArtist() {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [dor, setDor] = useState("");

  const [newArtist, setNewArtist] = useState("");

  const [songsList, setSongsList] = useState([]);

  const addSongs = () => {
    Axios.post("http://localhost:3000/create", {
      name: name,
      artist: artist,
      dor: dor,
    }).then(() => {
      console.log("success");
      
      });
    };
  

  const getSongs = () => {
    Axios.get("http://localhost:3000/songs1").then((response) => {
      setSongsList(response.data);
    });
  };

  const updateSongsArtist = (id) => {
    Axios.put("http://localhost:3000/update", { artist: newArtist, id: id }).then(
      (response) => {
        setSongsList(
          songsList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  name: val.name,
                  artist: newArtist,
                  dor: val.dor,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteSongs = (id) => {
    Axios.delete(`http://localhost:3000/delete/${id}`).then((response) => {
      setSongsList(
        songsList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
      <h2>Adding a new Song</h2>
      <div class="block">
                <label for="fname">Song Name</label>
          <input class="fname" type="text" name="name" onChange={(event) => {
            setName(event.target.value);
          }} />
      </div>
      <div class="block">
                <label for="">Artist:</label>
                <input type="text" name="name" placeholder="" onChange={(event) => {
            setArtist(event.target.value);
          }}/>
          <button className="Bt" onclick="OpenWindow()">Add Artist</button>
      </div>
      
      <div class="block">
                <label for="">Date Released</label>
                <input type="text" name="name" placeholder=""  onChange={(event) => {
            setDor(event.target.value);
          }}/>
        </div>  
        
        
        <button onClick={addSongs}>Submit</button>
      </div>
      <div className="songs">
        <button onClick={getSongs}>Show Songs</button>

        {songsList.map((val, key) => {
          return (
            <div className="songs">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Artist: {val.artist}</h3>
                <h3>dor: {val.dor}</h3>

              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewArtist(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateSongsArtist(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteSongs(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddArtist;
