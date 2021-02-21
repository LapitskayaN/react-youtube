import React from 'react';
import TextField  from '@material-ui/core/TextField';


class Review extends React.Component {
  constructor() {
    super()
    this.state = {
        text: '',
        comment: []
    }
  }


  render() {
        const { text, comment } = this.state
        // console.log(text)
        return (
          <TextField  className='review-field' label="Review" variant="outlined" />

        )

  } 
}

// const Review = () => {
//   return (
//     <TextField  className='review-field' label="Review" variant="outlined" />
//   )
// };

export default Review;