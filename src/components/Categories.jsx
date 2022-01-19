import React from 'react'
import { Card, Row, Col, CardGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Categories = () => {
    return (
        <div>
           <CardGroup>
  <Card>
    <Card.Img style={{width:'auto', height: '300px'}} variant="top" src="/office.jpg" />
    <Card.Body>
        <center>
      <Card.Title>Office Essentials </Card.Title>
      </center>
      <center>
      
      <Link to='/categories'>Shop Now</Link>
      
      </center>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" style={{width:'auto', height: '300px'}} src="/school.jpg" />
    <Card.Body>
        <center>
      <Card.Title>School Essentials</Card.Title>
      </center>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" style={{width:'auto', height: '300px'}} src="notebook.jpg" />
    <Card.Body>
        <center>
      <Card.Title>Notebooks and Diaries</Card.Title>
      </center>
    </Card.Body>
    
  </Card>
  
</CardGroup> 
        </div>
    )
}

export default Categories
