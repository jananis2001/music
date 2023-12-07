import React from 'react';
import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import Feed from './feed';
import Player from './player';
import Favourites from './favourites';
import Trending from './trending';
import "./home,css";

export default function Home() {
  return (
    <Router>
        <div className="main-body">
       <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favourites" element={<Favourites />} />
       </Routes>
       </div>
    </Router>
  )
}
