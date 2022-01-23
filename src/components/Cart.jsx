import React from 'react';
import CartItem from './CartItem';
import { Card, Button } from "react-bootstrap";
import '../css/ItemList.css'
import { Link } from 'react-router-dom';
function Cart({ cartList, subTotal, onUpdateCartQty, onEmptyCart, onRemoveFromCart }) {
  return (<>
  <div className='ItemList'>
      {
        cartList.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}/>
        ))
      }
      
    </div>
    <center>
    <h4>
        Subtotal = {subTotal}
      </h4>
    <Button variant="primary" onClick={() => onEmptyCart()}>Empty cart</Button>{'                  '}
    <Link to="/checkout">
      <Button variant="primary">Checkout</Button>{'                  '}
      </Link>
      </center>
  </>
  );
}

export default Cart;
