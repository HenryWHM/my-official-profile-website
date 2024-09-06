import { useState, useEffect } from 'react';

const Introduction = () => {
  const [intro, setIntro] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/introduction')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setIntro(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
    return (
      <div className="introduction">
        <h2>Introduction</h2>
        {intro ? <p>{intro[0].context}</p> : <p>Loading...</p>}
      </div>
    );
  }

export default Introduction;