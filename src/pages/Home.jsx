import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Data from '../components/Data.js'
import ItemList from '../components/ItemList'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import { commerce } from '../lib/commerce.js'
import Cart from '../components/Cart'
import Checkout from '../components/Checkout'
import Aboutus from '../components/Aboutus'


const Home = () => {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState({})
    const [cartList , setCartList] = useState([])
    const [totalItemsCart , setTotalItemsCart] = useState(0)
    const [subTotal , setSubTotal] = useState("")
    const fetchItems = async () => {
        const { data } = await commerce.products.list()
        setItems(data)
    }
    const fetchCart = async () => {
        const cart =  await commerce.cart.retrieve();
        setCart(cart)
        setCartList(cart.line_items)
        setTotalItemsCart(cart.total_items)
        setSubTotal(cart.subtotal.formatted_with_symbol)
    }
    const handleAddToCart = async (itemID, quantity) =>{
        const response =  await commerce.cart.add(itemID, quantity)
        setCart(response.cart)
        setCartList(response.cart.line_items)
        setTotalItemsCart(response.cart.total_items)
        setSubTotal(response.cart.subtotal.formatted_with_symbol)
    }
    const handleUpdateCartQty = async (itemID, quantity) =>{
        const response =  await commerce.cart.update(itemID, { quantity })
        setCart(response.cart)
        setCartList(response.cart.line_items)
        setTotalItemsCart(response.cart.total_items)
        setSubTotal(response.cart.subtotal.formatted_with_symbol)
    }
    const handleRemoveFromCart = async (itemID) =>{
        const response = await commerce.cart.remove(itemID)
        setCart(response.cart)
        setCartList(response.cart.line_items)
        setTotalItemsCart(response.cart.total_items)
        setSubTotal(response.cart.subtotal.formatted_with_symbol)
    }
    const handleEmptyCart = async () =>{
        const response = await commerce.cart.empty()
        setCart(response.cart)
        setCartList(response.cart.line_items)
        setTotalItemsCart(response.cart.total_items)
        setSubTotal(response.cart.subtotal.formatted_with_symbol)
    }
    useEffect(() =>{
        fetchItems()
        fetchCart()
    },[])
    console.log(cart);
    return (
        <Router>
        <div>
        <Navbar totalItemsCart={totalItemsCart}/>
            <Routes>
            <Route exact path='/' element={
                <>
                
       <Banner/>
            <br></br>
            <center >
            <h1>Categories</h1>
            </center>
            <br></br>
            <Categories/>
            
            <Footer/>
                </>
            }/>


            <Route path='/office' element={<ItemList items = {items} onAddToCart={handleAddToCart} category='<p>office</p>'/>}/>
            <Route path='/school' element={<ItemList items = {items} onAddToCart={handleAddToCart} category='<p>school</p>'/>}/>
            <Route path='/notebookAndDiaries' element={<ItemList items = {items} onAddToCart={handleAddToCart} category='<p>notebook</p>'/>}/>
            <Route path='/cart'element={<Cart cartList={cartList} subTotal={subTotal} onUpdateCartQty={handleUpdateCartQty} onEmptyCart={handleEmptyCart} onRemoveFromCart={handleRemoveFromCart} />}/>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/aboutus' element={<Aboutus/>}></Route>
            </Routes>

            </div>
        </Router>
    )
}

export default Home

