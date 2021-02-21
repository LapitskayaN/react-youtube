import React from 'react';
import { Typography } from "@material-ui/core";
import { Button } from '@material-ui/core';


class EmptyList extends React.Component {
  constructor() {
    super()
   
  }

  render() {
               
        return (
          <div >
             
            <Typography variant="subtitle1">
              There is no video
            </Typography>
             
            <Button variant="contained" color="secondary" 
            onClick={()=>this.props.showAll()}>
              Show all movie
            </Button>

          </div>
        )

  } 
}


export default EmptyList;