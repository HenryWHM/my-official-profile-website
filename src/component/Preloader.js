import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations';
import './preloader.css'
import photo from '../images/HD-wallpaper-la-casa-de-papel-black-dali-dali-mask-de-papel-icon-la-casa-papel-tv-series.jpg'

const Preloader = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[]);
  return (
    <div className="preloader">
        <img src={photo} alt="A dali mask goon"></img>
        <div className="texts-container">
            <span>Welcome to my official profile website</span>
            <br/>
            <span>Bienvenido al sitio web de mi perfil oficial</span>
        </div>
    </div>
  );
};

export default Preloader