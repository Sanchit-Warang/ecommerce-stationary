import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'



const Home = () => {
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
            
        </div>
    )
}

export default Home

