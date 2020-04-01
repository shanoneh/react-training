import React from 'react';
import './App.css';
import {Component} from 'react';
import Author from '../components/Author/author.js';
import Comment from '../components/Comments/comment.js';
import Approved from '../components/Approved/approved';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from '../wrappers/wrapper';

class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    authors : [
      {fullName:"شارونه", regdate:"1399/01/01"},
      {fullName:"شادی", regdate:"1399/01/02"},
      {fullName:"شادونه", regdate:"1399/01/03"},
      {fullName:"شاشا", regdate:"1399/01/04"},
    ],
    showAuthors: false,
    showComments: true, 
    }
  }

    removeAuthorData = (authorIndex) => {
      const authors = [...this.state.authors];
      authors.splice(authorIndex , 1);
      this.setState({authors:authors});
    }
    changeAuthorName = (newFullName) => {
        // console.log('data changed!!');
        this.setState({
            authors : [
              {fullName:newFullName, regdate:"1399/02/01"},
              {fullName:" شادی 2", regdate:"1399/02/02"},
              {fullName:" 2شادونه", regdate:"1399/02/03"},
              {fullName:" 2شاشا", regdate:"1399/02/04"},
            ]
        })
    }

    changeDataTwowayBinding = (event) => {
      // console.log(event.target.value);
      this.setState({
        authors : [
          {fullName: event.target.value, regdate:"1399/02/01"},
          {fullName:" شادی 2", regdate:"1399/02/02"},
          {fullName:" 2شادونه", regdate:"1399/02/03"},
          {fullName:" 2شاشا", regdate:"1399/02/04"},
        ]
    })
    }
  render () {
    // const style={
    //   backgroundColor:'yellow',
    //   border: '1px solid black',
    //   color: 'black'
    // }
    return (
      // <div className="App">
      <Wrapper>
      <h1>نویسندگان</h1>
        <button className="btn btn-primary btn-large" onClick={this.changeAuthorName.bind(this , "مسعود صالحی")}>تغییراسامی نویسندگان</button>
        <p>تعداد نویسندگان : {this.state.authors.length}</p>
        <div className="ui container">
          <Author 
          fullName={this.state.authors[0].fullName} 
          click={this.changeAuthorName.bind(this , "علیرضا اسحاق")}
          changed={this.changeDataTwowayBinding}
          />مدیر<Author/>
          <Author fullName={this.state.authors[1].fullName}/>مسئول<Author/>
          <Author fullName={this.state.authors[2].fullName}/>مدیر<Author/>
        </div>
        <h1>نظرات</h1>
          <div className="ui container">
            <Approved>
              <Comment fullName={this.state.authors[0].fullName} description="good" regDate={this.state.authors[0].regdate}/>
            </Approved>
            <Approved>
              <Comment fullName={this.state.authors[1].fullName} description="good" regDate={this.state.authors[1].regdate}/>
            </Approved>
            <Approved>
              <Comment fullName={this.state.authors[2].fullName} description="best" regDate={this.state.authors[2].regdate}/>
            </Approved>
            <Approved>
              <Comment fullName={this.state.authors[3].fullName} description="bad" regDate={this.state.authors[3].regdate}/>
            </Approved>
        </div>
        </Wrapper>
      // </div>
    );
  }
}

export default App;
