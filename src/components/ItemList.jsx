import Item from '../components/Item'
import '../css/ItemList.css'
function ItemList({ items ,category ,onAddToCart}) {
    let categoryItems = items.filter((item) => item.description === category)
    return (
        <div className='ItemList'>
            
            {
                
                categoryItems.map((item) => (
                    <Item key={item.id} item={item} onAddToCart={onAddToCart} />
                ))
            }
        </div>
    )
}

export default ItemList
