import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'




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

            <Footer/>
            
        </div>
    )
}

export default Home

