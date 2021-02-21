import React from 'react';
import TextField  from '@material-ui/core/TextField';
// import { Button } from '@material-ui/core';


class Review extends React.Component {
  constructor() {
    super()
  //   this.state = {
  //       text: '',
  //       comment: []
  //   }
  }

  // handleClick = (comment) => {
  //   this.setState({
  //     comments: [...this.state.comments, comment]
  //   })
  // }



  render() {
        // const { text, comment } = this.state
       
        return (
        <div className="reviewSection">
          <TextField  className='review-field' label="Review" variant="outlined" />
          
          {/* <Button variant="contained" color="secondary" 
              onClick={()=>this.handleClick(text)}>
                Send
          </Button> 

          <div className="comments-block">
            {comments ?.map((comment) => {
                return <p className="comment">{comment}</p>
              })}
          </div>
         */}
        
        </div>
        )

  } 
}

// const Review = () => {
//   return (
//     <TextField  className='review-field' label="Review" variant="outlined" />
//   )
// };

export default Review;