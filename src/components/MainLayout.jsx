import React from 'react';

import CardList from './CardList';
import Card from './Card';

import data from '../data';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.data = data;
    this.isFullVideo = true;
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div className='content'>
        <div className="mainContent">
            <Card
              chanel={this.data[0].chanel}
              url={this.data[0].url}
              name={this.data[0].name}
              isFullVideo={this.isFullVideo}
            />
        </div>
        <div className="cardList">
            <CardList
            list={this.data}
            />
        </div>
      </div>
    )
  }
};

export default MainLayout;