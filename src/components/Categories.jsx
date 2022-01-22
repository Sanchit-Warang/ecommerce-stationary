import React from 'react'
import { Card, Row, Col, CardGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../css/category.css'
const Categories = () => {
    return (
        <div>
           <CardGroup>
  <Card >
    <Card.Img className="image" style={{width:'auto', height: '300px'}} variant="top" src="/office.jpg" />
    <Card.Body className="body">
        <center>
      <Card.Title>Office Essentials </Card.Title>
      </center>
      <center>
      <Link to='/office'>
      <Button variant="primary">Shop Now</Button>
      </Link>
      </center>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img className="image" variant="top" style={{width:'auto', height: '300px'}} src="/school.jpg" />
    <Card.Body className="body">
        <center>
      <Card.Title>School Essentials</Card.Title>
      </center>
      <center>
      <Link to='/school'>
      <Button variant="primary">Shop Now</Button>
      </Link>
      </center>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img className="image" variant="top" style={{width:'auto', height: '300px'}} src="notebook.jpg" />
    <Card.Body className="body" >
        <center>
      <Card.Title>Notebooks and Diaries</Card.Title>
      </center>
      <center>
      <Link to='/notebookAndDiaries'>
      <Button variant="primary">Shop Now</Button>
      </Link>
      </center>
    </Card.Body>
    
  </Card>
  
</CardGroup> 
        </div>
    )
}

export default Categories
