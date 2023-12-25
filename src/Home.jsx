import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (location) => {
    navigate(location);
  };

  return (
    <div>
      <div className="ocr">
        <p>Thai ID OCR Application</p>
        <button onClick={() => { handleClick('/details') }}>View & Update</button>
        <button onClick={() => { handleClick('/submit') }}>Submit Here</button>
      </div>
    </div>
  );
};

export default Home;