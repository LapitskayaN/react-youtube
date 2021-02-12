import React from 'react';
import ReactPlayer from 'react-player/youtube';

const Card = ({ currentItem, isFullVideo=false}) => {

  const { url, chanel, name } = currentItem;
  
  return (
    <div 
      className='card'
    >
      <ReactPlayer        
        width='100%'
        height= {isFullVideo ?  '500px' : '100%'}
        url={url}
      />
      <div className="descrCard">
        <h2 
          className="cardChanel"
        >
          {chanel}
        </h2>
        <p className="cardName">{name}</p>
      </div>
    </div>
  )
};

export default Card;