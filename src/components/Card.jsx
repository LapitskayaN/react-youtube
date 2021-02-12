import React from 'react';
import ReactPlayer from 'react-player/youtube';

const Card = ({ url, chanel, name, isFullVideo }) => {
  
  return (
    <div className='card'>
      <ReactPlayer         
        width='100%'
        height= {isFullVideo ?  '600px' : '100%'}
        url={url}
      />
      <div className="descrCard">
        <h2>{chanel}</h2>
        <p>{name}</p>
      </div>
    </div>
  )
};

export default Card;