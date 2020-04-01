
import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Users from './conponents/Users'
import {BrowserRouter, Route} from 'react-router-dom'
import Posts from './conponents/Posts'
import Comment from './conponents/Comment'


class App extends Component {

  state={
    Users:[],
    Posts:[],
    Comment:[]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>
    {
      // console.log(res.data)
      this.setState({
          Users :res.data })}
    )
    // this.getpost('1')
    // console.log(this.state.Posts)
  }

getpost= userId =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((res)=>
    {
      console.log(res.data)
      this.setState({
          Posts :res.data })}
    )
  }

getComment =postId =>{

  axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then((res)=>
  {
    console.log(res.data)
    this.setState({
        Comment :res.data })}
  )

}  
  render() {
    return (
      <BrowserRouter>
      <Route exact path='/' render= { ()=>
      <>
         {this.state.Users.map((user, id) => (
          
          <Users
            user={user}
            key={id}
          
          />))}
      </>}></Route>
      
      <Route exact path='/posts/userId=:userId' render={props=> (<Posts {...props} Posts={this.state.Posts} getpost={this.getpost}/>)} />
      <Route exact path='/comments/postId=:postId' render={props=> (<Comment {...props} Comment={this.state.Comment} getComment={this.getComment}/>)} />
     
      </BrowserRouter>
    );
  }
}

export default App;

// this.state.Posts.map((post, userId) =>post={post}
// key={userId}/>))}