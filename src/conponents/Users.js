import React, { Component } from 'react'
import {Card , Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class Users extends Component {

   
    render (){
        const { id, name, username ,email ,phone,website} = this.props.user;
        return (
            
<Card className='card'>
        <Card.Header className="header" as="h5"></Card.Header>
  <Card.Body>
    <Card.Title>{name}{username}</Card.Title>
    <Card.Text>
     {phone} {" "}
     {email} {" "}
     {website}
     </Card.Text>
     
     <Link to={`/posts/userId=${id}`}>  <Button variant="primary">Following </Button>
     </Link>
  </Card.Body>
</Card>

            
        )
    
          }
}
export default Users