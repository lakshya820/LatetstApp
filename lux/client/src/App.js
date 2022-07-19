import axios from "axios";
import { useState } from "react";
import AddArtist from "./AddArtist/AddArtist";
import TopSong from "./TopSong/TopSong";
import "./App.css"

function App() {
  const [state,setState]= useState(false)

  return (
    <div className="App">
      <div id="header">
        <div class="child"><h2>Home</h2></div>
        <div class="child"><form id="form" role="search">
            <input type="search" id="query" name="q"
             placeholder="Search..."
             aria-label="Search through site content" />
            <button>Search</button>
          </form></div>
    </div>

    <div class="child"><h2>Top 10 SOngs</h2></div>
    <div id="parent">    
        <TopSong />
        <div className="child">{state ? <AddArtist /> : null}
<button onClick={() => setState(true)}>AddSong</button>


    </div>
    </div>
    </div>
  );
}  

export default App;
