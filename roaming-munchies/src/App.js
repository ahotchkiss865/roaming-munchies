import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import Explore from './components/Explore';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div class="main-content">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/profile" element={<Profile />} /> {/* Profile page */}
            <Route path="/search" element={<Search />} /> {/* Search page */}
            <Route path="/explore" element={<Explore />} /> {/* Explore page */}
            {/* Add more routes for other pages/components */}
          </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
