import React from 'react';
import ReactPlayer from 'react-player/youtube';

const Card = ({ currentItem, isFullVideo=false, handleClick}) => {

  const { url, chanel, name } = currentItem;

  return (
    <div 
      className='card'
    >
      <ReactPlayer        
        width='100%'
        height= {isFullVideo ?  '500px' : '200px'}
        url={url}
        light={isFullVideo ? false : true}
        onClick={() => {
          handleClick(currentItem);
        }}
      />
      <div className="descrCard">
        <h2 
          className="cardChanel"
          onClick={() => {
            handleClick(currentItem);

          }}
        >
          {chanel}
        </h2>
        <p className="cardName">{name}</p>
      </div>
    </div>
  )
};

export default Card;