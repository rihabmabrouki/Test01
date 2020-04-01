import React from 'react'
import {Link} from 'react-router-dom'
import {Card , Button} from 'react-bootstrap'
// import Meet from './img/Meet.jpg'


export default class Posts extends React.Component {



    componentDidMount(){
        const id= this.props.match.params.userId;
        this.props.getpost(id);
    }
    render(){
    return (
        
        <div >
              {this.props.Posts.map((post , id)=>( 
                 
    <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src={Meet} /> */}
  <Card.Body>
    <Card.Title>{post.title}</Card.Title>
    <Card.Text>
      {post.body}
    </Card.Text>
    <Link to={`/comments/postId=${id}`}> <span><i className="far fa-comments"></i></span></Link>
  </Card.Body>
</Card>
              
             
       ) )}
        </div>
        
    )
}}
