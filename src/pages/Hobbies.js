import React from 'react';
import './CommonBox.css';
import { useState, useEffect } from 'react';
import hobbiesProfile from '../data/hobbies.json';

const Hobbies = () => {
    const [hobbies, setHobbies] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(false);

    useEffect(() => {
      setHobbies(hobbiesProfile.hobby_cards);
    }, []);

    if (!hobbies) {
      return (<p>Loading...</p>)
    }

  return (
    <div className="hobbies_container">
      {hobbies.map((hobby, index) => (
        <div key={index} className="common-box" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
          <img className="common-image" src={hoveredIndex === index ? hobby.gif : hobby.pic} alt={hobby.title} />
          <div className="common-text">
            <h2>{hobby.title}</h2>
            <p>{hobby.context}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hobbies;
