import React from 'react';
import './App.css';
import heroImage from './assets/cover2.jpg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo">Black Sabbath</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">Black Sabbath</a></li>
              <li><a href="#services">Songs</a></li>
              <li><a href="#work">More Albums</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="container hero-content">
            <div className="text-title">
              <h1>Heaven And Hell</h1>
              <div className="text-body">
                <p>Heaven and Hell is the ninth studio album by English heavy metal band Black Sabbath, released on 18 April 1980.</p>
              </div>
              <a href="https://open.spotify.com/album/46gHYWaRr052RGEiL5Dg7T" className="listen-btn" target="_blank" rel="noopener noreferrer">Listen Now</a>
              <div className="stats">
                <div className="stat">
                  <h2>39:46</h2>
                  <p>Length</p>
                </div>
                <div className="stat">
                  <h2>8</h2>
                  <p>Total Songs</p>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Cover" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
