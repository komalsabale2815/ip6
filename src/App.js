import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CollegeProfile from './CollegeProfile';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>

            <li>
              <Link to="/profile">College Profile</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* The path should be '/profile' for this route */}
          <Route path="/profile" element={<CollegeProfile />} />
          <Route path="/" element={<h1>Welcome to the College Portal</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
