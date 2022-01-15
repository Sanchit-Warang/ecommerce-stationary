import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Data from '../components/Data.js'
import ItemList from '../components/ItemList'
import { useState } from 'react'


const Home = () => {
    const [items , setItems] = useState(Data)
    return (
        <div>
            <Navbar/>
            <Banner/>
            <br></br>
            <center >
            <h1>Categories</h1>
            </center>
            <br></br>
            <Categories/>
            <ItemList items = {items}/>

            <Footer/>
            
        </div>
    )
}

export default Home

