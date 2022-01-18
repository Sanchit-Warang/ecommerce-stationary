import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Data from '../components/Data.js'
import ItemList from '../components/ItemList'
import { useState } from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

const Home = () => {
    const [items , setItems] = useState(Data)
    return (
        <Router>
        <div>
        <Navbar/>
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


            <Route path='/categories' element={<ItemList items = {items}/>}/>

            </Routes>

        </div>
        </Router>
    )
}

export default Home

