import { Routes, Route } from "react-router-dom";
import "./App.css";
import Trending from "./screens/Trending";
import Library from "./screens/Library";
import Favorites from "./screens/Favorites";
import Player from "./screens/Player";
import Feed from "./screens/Feed";
import Sidebar from "./components/Sidebar";
import Login from "./screens/auth/Login";
import React, { useEffect, useState } from "react";
import { setClientToken } from "./spotify";


function App() {
  const [token, setToken] = useState("");

  useEffect(()=>{
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if(!token && hash)
    {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    }
    else{
      setToken(token);
      setClientToken(token);
    }
    
  },[])
  return (
    !token ? 
    (<Login/>) : 
    (<div className="bg-black min-h-screen min-w-screen box-border">
      <div className="bg-gradient-to-b from-teal-300	 h-screen w-screen rounded-3xl flex flex-row">
        
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Library/>}></Route>
          <Route path="/feed" element={<Feed/>}></Route>
          <Route path="/player" element={<Player/>}></Route>
          <Route path="/trending" element={<Trending/>}></Route>
          <Route path="/favorites" element={<Favorites/>}></Route>
        </Routes>
      </div>
    </div>)

  );
}

export default App;
