import React from 'react';
import Introduction from '../Introduction.js';
import Navbar from '../NavBar.js';
import CardList from '../CardList.jsx';

const Home = () => {
    return (
        <div className="App">
            <div className="app-container">
                <Navbar />
            </div>
            <div className="content">
                <Introduction />
            </div>
            <div className="d-flex w-100 card-container">
                <CardList />
            </div>
        </div>
    )
}

export default Home;
