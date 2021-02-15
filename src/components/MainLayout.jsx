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
      currentItem: this.data[0],
      like: 0,
      dislike: 0
    };

    this.handleClick = this.handleClick.bind(this)
    this.handleLikeClick = this.handleLikeClick.bind(this)
    this.handleDislikeClick = this.handleDislikeClick.bind(this)
  }

  getVideoList (arr) {
    let newArr = arr.slice();
    let curItem = arr.find((elem) => elem.id === this.state.currentItem.id);
    newArr.splice(newArr.indexOf(curItem), 1);
    return newArr;
  }

  handleClick (item) {
    this.setState({
      ...this.state,
      currentItem: item
    });
  }

  handleLikeClick(type) {
    this.setState({
      ...this.state,
      like: this.state.like + 1
    });
  }

  handleDislikeClick() {
    this.setState({
      ...this.state,
      dislike: this.state.dislike + 1
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
            <div className="likes">
              <span className="buttonLike"
                onClick={this.handleLikeClick}
              >
                <img src='https://www.stickees.com/files/emoticons/emojicons/150-hearts-love-loving.png'/> {this.state.like}
              </span>
              <span className="buttonLike"
                onClick={this.handleDislikeClick}
              >
                <img src="https://www.stickees.com/files/emoticons/emojicons/143-flirty-love.png" /> {this.state.dislike}
              </span>
            </div>
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