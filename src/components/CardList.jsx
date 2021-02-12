import React  from 'react';
import Card from './Card';

const CardList = ({ list }) => {
  return (
    <div>
      {list.map((elem) => 
        <Card
          key={elem.id}
          chanel={elem.chanel}
          url={elem.url}
          name={elem.name}
        />
      )}
    </div>

  )
};

export default CardList;