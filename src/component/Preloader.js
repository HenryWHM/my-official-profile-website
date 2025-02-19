import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations';
import './preloader.css'
import photo from './istockphoto-1353633402-612x612.jpg';

const Preloader = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[]);
  return (
    <div className="preloader">
        <img src={photo} alt="Planet Earth"></img>
        <div className="texts-container">
            <span>Welcome to my world</span>
        </div>
    </div>
  );
};

export default Preloader