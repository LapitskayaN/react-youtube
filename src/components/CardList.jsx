import React  from 'react';
import Card from './Card';

const CardList = ({ list}) => {
  return (
    <div>
      {list.map((elem) => 
        <Card
          key={elem.id}
          currentItem={elem}
        />
      )}
    </div>

  )
};

export default CardList;