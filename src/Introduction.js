import { useState, useEffect } from 'react';
import introData from './data/intro.json';

const Introduction = () => {
  const [intro, setIntro] = useState(null);

  useEffect(() => {
    setIntro(introData.introduction)
  }, []);

  if (!intro) {
    return(<p>Loading...</p>)
  }

    return (
      <div className="introduction">
        <h2>Introduction</h2>
        <p>{intro}</p>
      </div>
    );
  }

export default Introduction;