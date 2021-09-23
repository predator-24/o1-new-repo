import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function TrophyMake() {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./workshop.json')
    })
  }, [])
  
  return (
    <div className="App">
      <div className="container" ref={container} style={{width: 150, height: 150, alignSelf: 'center', marginLeft: -25 }}></div>
    </div>
  );
}

export default TrophyMake;