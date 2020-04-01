import React, { Component } from 'react'
import {Card } from 'react-bootstrap'

export default class Comment extends Component {



    

    componentDidMount(){
        const x= this.props.match.params.postId;
        this.props.getComment(x);
    }
    render(){
    return (
        
        <div className="comment">
              {this.props.Comment.map((comment , id)=>( 
                  <div key={id}>
               <Card style={{ width: '18rem' }}>
               <Card.Body>
                 <Card.Title>{comment.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{comment.email}</Card.Subtitle>
                 <Card.Text>
                 {comment.body}
                 </Card.Text>
                 <Card.Link href="#"><i className="far fa-thumbs-up"></i>Like</Card.Link>
                 <Card.Link href="#"><i className="far fa-share-square"></i>Share</Card.Link>
               </Card.Body>
             </Card> 
              </div>
             
       ) )}
        </div>
        
    )
}
  
}
