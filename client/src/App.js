
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Make sure to create an App.css file for styles

// Header component with navigation buttons
const Header = () => (
  <header className="header">
    <h1>UI Sample</h1>
    <nav className="navigation">
      <button className="time-btn">1 hr</button>
      <button className="time-btn">8 hr</button>
      <button className="time-btn">24 hr</button>
      
    <button className="hamburger-btn">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <button className="info-btn">i</button>
    </nav>
  </header>
);

// Timeline component for cycle status
const Timeline = ({ data }) => (
  <div className="timeline-container">
    <h2>Cycle Status</h2>
    <div className="timeline">
      <div className="markers">
        {/* Render markers based on data */}
        {data.map((item, index) => (
          <div key={index} className={`marker ${item.color}`}></div>
        ))}
      </div>
    </div>
  </div>
);

// Main App component
const App = () => {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data'); // Make API call to fetch data from backend

      setTimelineData(response.data); // Set fetched data to state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="app">
      <Header />
      <Timeline data={timelineData} /> {/* Pass fetched data to Timeline component */}
    </div>
  );
};

export default App;





