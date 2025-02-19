import React from 'react';
import './Card.css'
import discordIcon from './socialmedia_images/discord.jpg';
import instaIcon from './socialmedia_images/instagram.webp';
import facebookIcon from './socialmedia_images/facebook.jpg';
import githubIcon from './socialmedia_images/github.webp';
import { useNavigate } from 'react-router-dom';

const Media = ({imgSrc, title, description, Alt, navigateTo}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        if (navigateTo.startsWith("http")) {
            window.open(navigateTo, "_blank");  // Open external links in a new tab
        } else {
            navigate(navigateTo);  // Navigate within the React app
        }
    };

    return (
        <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <img className="card-image" src={imgSrc} alt={Alt}></img>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
        </div>
    )}

const MediaList = () => {
    const medias = [
        {
            imgSrc: facebookIcon,
            title: "Facebook 🇰🇷",
            description: "Click to follow!",
            alt: "Facey",
            navigateTo: "https://www.facebook.com/profile.php?id=100008810344712"
        },
        {
           imgSrc: instaIcon,
           title: "Instagram 🇯🇵",
           description: "Click to follow!",
           alt: "Insta",
           navigateTo: "https://www.instagram.com/cannot_be_hm"
        },
        {
            imgSrc: discordIcon,
            title: "Discord 🇨🇳",
            description: "Click to follow!",
            alt: "Discey",
            navigateTo: "https://discordapp.com/users/584605039046295563"
        },
        {
            imgSrc: githubIcon,
            title: "Github 🇸🇬",
            description: "Click to follow!",
            alt: "Facey for Comp Sci nerds",
            navigateTo: "https://github.com/HenryWHM"
        }

    ]
    return (
        <div className="media-container">
          {medias.map((media, index) => (
            <Media key={index} {...media} />
          ))}
        </div>
    );
}


export default MediaList;