import Item from '../components/Item'
import '../css/ItemList.css'
function ItemList({ items }) {
    console.log(items)
    return (
        <div className='ItemList'>
            {
                items.map((item) => (
                    <Item key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default ItemList
