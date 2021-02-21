import React  from 'react';
import Card from './Card';


class CardList extends React.Component {
  constructor(props) {
      super(props);
    }

  render() {
      const {list, handleClick, showAll} = this.props
      return (
          <div>
              

            <div className='cardList'>           
                {list.map((elem) => 
                  <Card
                  key={elem.id}
                  currentItem={elem}
                  handleClick={handleClick}
                  />
                )}
            </div>

          </div>
      )
  }
}


// const CardList = ({ list, handleClick}) => {
//   return (
//     <div>
//       {list.map((elem) => 
//         <Card
//           key={elem.id}
//           currentItem={elem}
//           handleClick={handleClick}
//         />
//       )}
//     </div>

//   )
// };

export default CardList;