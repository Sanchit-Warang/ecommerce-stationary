import Item from '../components/Item'
import '../css/ItemList.css'
function ItemList({ items ,category}) {
    console.log(items)
    let categoryItems = items.filter((item) => item.category === category)
    return (
        <div className='ItemList' >
            
            {
                
                categoryItems.map((item) => (
                    <Item key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default ItemList
