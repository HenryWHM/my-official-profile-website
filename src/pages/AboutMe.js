import React from 'react';
import profilePic from '../images/my-profile-pic.png';
import './AboutMe.css';
import { useState, useEffect } from 'react';

const AboutMe = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8001/profile')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setProfile(data);
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);

  return (
    <div className="about-me-box">
      <img className="about-me-image" src={profilePic} alt="Profile" />
      <div className="about-me-text">
        <h2>About Me</h2>
        <p>{profile ? <p>{profile.aboutMe}</p> : <p>Loading...</p>} </p>
        <br />
        <p><b>Name:</b> {profile ? <p>{profile.fullname}</p> : <p>Loading...</p>} </p>
        <p><b>Age:</b> {profile ? <p>{profile.age}</p> : <p>Loading...</p>} </p>
        <p><b>Degree:</b> {profile ? <p>{profile.degree}</p> : <p>Loading...</p>} </p>
        <p><b>MBTI:</b> {profile ? <p>{profile.mbti}</p> : <p>Loading...</p>} </p>
      </div>
    </div>
  );
}

export default AboutMe;
