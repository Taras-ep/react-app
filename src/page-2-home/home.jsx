import React from "react"
import './home.css'
import Header from "./homePageHeader"

const Home = () => {
    return (
        <div className="home-page-container">
            <Header/>
            <main>
                <div className="slider-home-page">
                    <div className="slider-item-2"></div>
                    <div className="slider-item-1"></div>
                    <div className="slider-item-3"></div>
                </div>
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Home