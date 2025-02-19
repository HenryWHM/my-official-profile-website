import React from 'react';
import './CommonBox.css';
import { useState, useEffect } from 'react';
import profileData from '../data/profile.json';

const AboutMe = () => {
    const [profile, setProfile] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    useEffect(() => {
      setProfile(profileData.profile);
    }, []);

    if (!profile) {
      return (<p>Loading...</p>)
    }

  return (
    <div className="common-box" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img className="common-image" src={isHovered ? profile.profileGif : profile.profilePic} alt="Profile" />
      <div className="common-text">
        <h2>{profile.title}</h2>
        <p>{profile.context}</p>
        <br />
        <p><b>Name:</b> {profile.fullname}</p>
        <p><b>Age:</b> {profile.age}</p>
        <p><b>Degree:</b> {profile.degree}</p>
        <p><b>MBTI:</b> {profile.mbti}</p>
      </div>
    </div>
  );
}

export default AboutMe;
