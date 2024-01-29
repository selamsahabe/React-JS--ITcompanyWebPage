import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navbar">
            <li>
              {/* MY LOGO,AFTER CLIKING LOGO GOING TO THE HOME PAGE  */}
              <Link to="/">
                <img
                  src="https://i.ibb.co/PCz8p96/Logo-Sample-By-Tailor-Brands-1.png"
                  alt="IT Png"
                  className="logo-image"
                />
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
