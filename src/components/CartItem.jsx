import React from 'react';
import { Card, Button } from "react-bootstrap";
import '../css/Item.css'
function CartItem({ cartItem, onRemoveFromCart, onUpdateCartQty }) {
  return (<div>
    <Card className="item2">
        <div className="container">
        <Card.Img variant="top" src={cartItem.image.url} className='img'/>
        <Card.Body>
            <div className="cardText">
            <Card.Title>{cartItem.name}</Card.Title>
            <Card.Title>{cartItem.line_total.formatted_with_symbol}</Card.Title>
            </div>
            
        </Card.Body>
        </div>
        <center>
        <Button variant="success" size="sm" onClick={() => onUpdateCartQty(cartItem.id ,cartItem.quantity + 1 )}>+</Button>
           <h6>{cartItem.quantity}</h6>
           <Button variant="warning" size="sm" onClick={() => onUpdateCartQty(cartItem.id ,cartItem.quantity - 1 )} >-</Button>
            </center>
            <Button variant="danger"onClick={() => onRemoveFromCart(cartItem.id)}>REMOVE</Button>
    </Card>
</div>);
}

export default CartItem;
