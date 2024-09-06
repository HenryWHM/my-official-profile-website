import React from 'react';
import './Card.css'
import profilePic from './images/my-profile-pic.png';
import hobbyPic from './images/le-professor-at-work.png';
import codingPic from './images/Socsocsocpostui.png';
import { useNavigate } from 'react-router-dom';

const Card = ({imgSrc, title, description, Alt, navigateTo}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(navigateTo);
    };

    return (
        <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <img className="card-image" src={imgSrc} alt={Alt}></img>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
        </div>
    )}

const CardList = () => {
    const cards = [
        {
            imgSrc: profilePic,
            title: "About Me",
            description: "I am a third year CS student, I code, write novels and play video games.",
            alt: "It's Me!",
            navigateTo: "/about-me"
        },
        {
           imgSrc: hobbyPic,
           title: "My Hobbies",
           description: "What I do during my freetime.",
           Alt: "Me hacking",
           navigateTo: "/hobbies"
        },
        {
            imgSrc: codingPic,
            title: "My Personal Projects",
            description: "My coding projects.",
            Alt: "UNSW Social Soccer Society Social Media Post UI",
            navigateTo: "/projects"
        }

    ]
    return (
        <div className="card-container">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
    );
}


export default CardList;