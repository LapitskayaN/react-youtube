import React from 'react';

import Header from './Header'
import CardList from './CardList';
import Card from './Card';
import SearchFilter from './SearchFilter';
import { Typography } from "@material-ui/core";
import Review from './Review'

import data from '../data';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.data = data;
    this.isFullVideo = true;

    this.state = {
      currentItem: this.data[0],
      like: 0,
      dislike: 0,
      seacrhText: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleDislikeClick = this.handleDislikeClick.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  getVideoList (arr) {
    let newArr = arr.slice();
    let curItem = arr.find((elem) => elem.id === this.state.currentItem.id);
    newArr.splice(newArr.indexOf(curItem), 1);
    return newArr;
  }

  handleSort (name) {
    this.setState({
      ...this.state,
      seacrhText:name
    })
  }

  handleClick (item) {
    this.setState({
      ...this.state,
      currentItem: item
    });
  }

  handleDislikeClick() {
    this.setState({
      ...this.state,
      dislike: this.state.dislike + 1
    });
  }

  handleLikeClick() {
    this.setState({
      ...this.state,
      like: this.state.like + 1
    });
  }

  render() {
    return (
      <>
        <Header/>
        <div className='content'>
          <div className="mainContent">
            <SearchFilter
              handleSort={this.handleSort}
              pickedMovie={this.pickedMovie}
            />
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
            <Review/>
          </div>
          <div className="cardList">
            { this.getVideoList(this.data).filter((elem) =>{return elem.chanel.includes(this.state.seacrhText)}).length === 0 ? (
              <Typography variant="subtitle1">
                По данному запросу нет видео
              </Typography>
            ) : (
              <CardList
                list={this.getVideoList(this.data).filter((elem) =>{return elem.chanel.includes(this.state.seacrhText)})}
                handleClick={this.handleClick}
              />
            )
            } 
          </div>
        </div>
      </>
    )
  }
};

export default MainLayout;