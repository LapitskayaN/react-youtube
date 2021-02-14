import React  from 'react';
import Card from './Card';

const CardList = ({ list, handleClick}) => {
  return (
    <div>
      {list.map((elem) => 
        <Card
          key={elem.id}
          currentItem={elem}
          handleClick={handleClick}
        />
      )}
    </div>

  )
};

export default CardList;