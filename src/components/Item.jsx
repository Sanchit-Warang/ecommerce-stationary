import { Card, Button } from "react-bootstrap";
import '../css/Item.css'
import React from "react";
    
function Item({ item }) {
    
    return (
        <div>
            <Card className="item">
                <div className="container">
                <Card.Img variant="top" src={item.imgsrc} className='img'/>
                <Card.Body>
                    <div className="cardText">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Title>Rs {item.price}</Card.Title>
                    </div>
                    <div className="btnPosition">
                    <center>
                    <Button variant="primary" >Add to Cart</Button>
                    </center>
                    </div>
                </Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default Item
