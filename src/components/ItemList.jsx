import Item from '../components/Item'
function ItemList({items}) {
    console.log(items)
    return (
        <div style={{display : "flex"}}>
          {
              items.map((item) =>(
                  <Item key={item.id} item={item}/>
              ))
          }  
        </div>
    )
}

export default ItemList
