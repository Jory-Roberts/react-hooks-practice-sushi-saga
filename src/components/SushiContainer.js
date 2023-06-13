import React, { useState } from 'react';
import MoreButton from './MoreButton';
import Sushi from './Sushi';

function SushiContainer({ sushis }) {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedSushi, setSelectedSushi] = useState(null);
  const [remainingAmount, setRemainingAmount] = useState(100);

  const endIndex = startIndex + 4;
  const totalSushis = sushis.length;

  const loadMoreSushis = () => {
    setStartIndex((prevIndex) => prevIndex + 4);
  };

  const handleSushiSelection = (sushi) => {
    if (!sushi.isEaten && remainingAmount >= sushi.price) {
      setSelectedSushi(sushi);
      setRemainingAmount((prevAmount) => prevAmount - sushi.price);
    }
  };

  return (
    <div className='belt'>
      {sushis.slice(startIndex, endIndex).map((sushi) => (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          eatSushi={handleSushiSelection}
        />
      ))}
      {endIndex < totalSushis && <MoreButton loadMoreSushis={loadMoreSushis} />}
    </div>
  );
}

export default SushiContainer;
