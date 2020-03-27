import React from 'react';
import './App.css';
import {Component} from 'react';
import Author from './components/Author/author.js';
import Comment from './components/Comments/comment.js';
import Approved from './components/Approved/approved';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-rtl.min.css';

class App extends Component {
  state = {
    authors : [
      {fullName:"شارونه", regdate:"1399/01/01"},
      {fullName:"شادی", regdate:"1399/01/02"},
      {fullName:"شادونه", regdate:"1399/01/03"},
      {fullName:"شاشا", regdate:"1399/01/04"},
    ],
    showAuthors : true
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
          ],
          showAuthors : true
      })
    }

    renderAuthors(show){
      if(show){
        return(
          <div className="ui container">
          {
            this.state.authors.map((author , index)=>{
             return <Author 
                        fullName={this.state.authors[0].fullName} 
                        click={this.changeAuthorName.bind(this , "علیرضا اسحاق")}
                        changed={this.changeDataTwowayBinding}
                        key={index}
                    ></Author>
            })
          }
        </div>
        ) 
      }
      else {
        return null;
      }
    } 
  
  renderComments(){
    var comment = [];
    for(var i=0; i<this.state.authors.length; i++){
      Comment.push(
        <Approved>
          <Comment 
          fullName={this.state.authors[0].fullName} 
          description="good" 
          regDate={this.state.authors[0].regdate}
          key={i}
          />
        </Approved>
        )
    }
  console.log(comment)
  return comment;
  }
  render () {
    return (
      <div className="App">
      <h1>نویسندگان</h1>
        <button className="btn btn-primary btn-large" onClick={this.changeAuthorName.bind(this , "مسعود صالحی")}>تغییراسامی نویسندگان</button>
        {this.renderAuthors(this.state.showAuthors)}
        <h1>نظرات</h1>
          <div className="ui container">
            {this.renderComments}
        </div>
      </div>
    );
  }
}

export default App;
