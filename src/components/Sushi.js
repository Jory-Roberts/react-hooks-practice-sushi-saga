import React, { useState } from 'react';

function Sushi({ sushi, eatSushi }) {
  const [isEaten, setIsEaten] = useState(false);

  const handleSushiClick = () => {
    if (!isEaten) {
      setIsEaten(true);
      eatSushi(sushi.price);
    }
  };

  return (
    <div className='sushi'>
      <div
        className='plate'
        onClick={handleSushiClick}
      >
        {!isEaten && (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width='100%'
          />
        )}
      </div>
      <h4 className='sushi-details'>
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
