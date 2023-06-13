import React, { useState } from 'react';
import MoreButton from './MoreButton';
import Sushi from './Sushi';

function SushiContainer({ sushis }) {
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + 4;
  const totalSushis = sushis.length;

  const loadMoreSushis = () => {
    setStartIndex((prevIndex) => prevIndex + 4);
  };

  return (
    <div className='belt'>
      {sushis.slice(startIndex, endIndex).map((sushi) => (
        <Sushi
          key={sushi.id}
          sushi={sushi}
        />
      ))}
      {endIndex < totalSushis && <MoreButton loadMoreSushis={loadMoreSushis} />}
    </div>
  );
}

export default SushiContainer;
