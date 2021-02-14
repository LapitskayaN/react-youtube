import React from 'react';

import Header from './Header'
import CardList from './CardList';
import Card from './Card';

import data from '../data';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.data = data;
    this.isFullVideo = true;

    this.state = {
      currentItem: this.data[0]
    };

    this.handleClick = this.handleClick.bind(this)
  }

  getVideoList (arr) {
    let newArr = arr.slice();
    let curItem = arr.find((elem) => elem.id === this.state.currentItem.id);
    newArr.splice(newArr.indexOf(curItem), 1);
    return newArr;
  }

  handleClick (item) {
    this.setState({
      currentItem: item
    });
  }

  render() {
    return (
      <>
        <Header/>
        <div className='content'>
          <div className="mainContent">
            <Card
              currentItem={this.state.currentItem}
              isFullVideo={this.isFullVideo}
            />
          </div>
          <div className="cardList">
            <CardList
              list={this.getVideoList(this.data)}
              handleClick={this.handleClick}
            />
          </div>
        </div>
      </>
    )
  }
};

export default MainLayout;