import React from "react"
import { useEffect, useState } from "react";
import './home.css'
import HomePageSlider from "./slider/HomePageSlider.tsx";

const Home = () => {
    
    return (
        <div className="home-page-container">
            <HomePageSlider />
        </div>
    )
}

export default Home