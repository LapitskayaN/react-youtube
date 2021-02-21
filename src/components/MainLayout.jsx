import React from 'react';
import Header from './Header'
import CardList from './CardList';
import Card from './Card';
import SearchFilter from './SearchFilter';
import { Typography } from "@material-ui/core";
import Review from './Review';
import EmptyList from './EmptyList';
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
    this.showAll = this.showAll.bind(this);
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

  showAll() {
    this.setState({
     seacrhText: ''
    })
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

            <div className="reviewLikes">
             {/* -----------------Review ----------------------------*/}
              <div className="review">
                  <Review />
              </div>

            {/* -----------------like dislike ----------------------------*/}
              <div className="likes">
              
                <span className="buttonLike"
                  onClick={this.handleLikeClick}
                >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTsU_yabuUlDCzn7CK4k6qlpOwuCNtY7sHA&usqp=CAU"
                  // 'https://static.vecteezy.com/system/resources/thumbnails/000/440/205/small/Basic_Element_15-30__28686_29.jpg'                
                  /> {this.state.like}
                </span>
               
                {/* <span className="buttonLike"
                  onClick={this.handleDislikeClick}
                >
                  <img src="https://png.pngtree.com/png-vector/20190420/ourlarge/pngtree-dislike-vector-icon-png-image_964173.jpg" /> { this.state.dislike } 
                </span> */}
                
              </div>

                    
               
            </div>
          </div>
          <div className="cardList">
            { this.getVideoList(this.data).filter((elem) =>{return elem.chanel.includes(this.state.seacrhText)}).length === 0 ? 
            (
              <EmptyList 
              showAll={this.showAll} 
              
              />
      
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