import { Card, Button } from "react-bootstrap";
import '../css/Item.css'
function Item({ item }) {
    return (
        <div>
            <Card className="item">
                <Card.Img variant="top" src={item.imgsrc} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Title>Rs {item.price}</Card.Title>
                    <Card.Text>
                        {item.category}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
