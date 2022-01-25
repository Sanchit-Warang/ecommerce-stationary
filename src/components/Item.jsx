import { Card, Button } from "react-bootstrap";
import '../css/Item.css'
function Item({ item , onAddToCart }) {
    let img = `./images - Copy/${item.image.filename}`
    return (
        <div>
            <Card className="item">
                <div className="container">
                <Card.Img variant="top" src={item.image.url} className='img'/>
                <Card.Body>
                    <div className="cardText">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Title>{item.price.formatted_with_symbol}</Card.Title>
                    </div>
                    <div className="btnPosition">
                    <center>
                    <Button onClick={() => onAddToCart(item.id , 1)} variant="primary">Add to cart</Button>
                    </center>
                    </div>
                </Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default Item
