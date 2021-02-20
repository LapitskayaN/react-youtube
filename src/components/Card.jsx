import ReactPlayer from 'react-player/youtube';
import React, {Component} from 'react'

class Card extends  Component {
  constructor(props){
      super(props)

  }
  render (){
      const {currentItem, isFullVideo=false, handleClick} = this.props
      const { url, chanel, name } = currentItem;
         return (
      <div className='card' >
        <div>
         <ReactPlayer        
        width='100%'
        height= {isFullVideo ?  '500px' : '100px'}
        url={url}
        light={isFullVideo ? false : true}
        onClick={() => { 
          handleClick(currentItem);
        }}
        />
        </div>
        <div className="descrCard">
          <h2 className="cardChanel" > {chanel}    </h2>
          <p className="cardName">{name}</p>
        </div>

      </div>
  );
  }

}





// const Card = ({ currentItem, isFullVideo=false, handleClick}) => {
//  const { url, chanel, name } = currentItem;
//   return (
//     <div 
//       className='card'
//     >
//       <ReactPlayer        
//         width='100%'
//         height= {isFullVideo ?  '500px' : '200px'}
//         url={url}
//         light={isFullVideo ? false : true}
//         onClick={() => { 
//           handleClick(currentItem);
//         }}
//       />
//       <div className="descrCard">
//         <h2 
//           className="cardChanel"
//         >
//           {chanel}
//         </h2>
//         <p className="cardName">{name}</p>
//       </div>
//     </div>
//   )
// };

export default Card;