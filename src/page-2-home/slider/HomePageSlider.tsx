import React from "react";
import { useEffect, useContext, useRef, useState } from 'react'
import './home-page-slider.css'
import '../../mediaRequests/media-requests-page-2.css'


function HomePageSlider() {

    return (
        <main className='home-page-slider-wrapper'>
            <div className='home-page-slider-container'>
                <div className='slider-button slider-button-left'></div>
                <div className="slider-home-page">
                    <div className="slider-item slider-item-1" ></div>
                    <div className="slider-item slider-item-2"></div>
                    <div className="slider-item slider-item-3"></div>
                    <div className="slider-item slider-item-4"></div>
                </div>
                <div className='slider-button slider-button-right'></div>
            </div>
            <div className="slider-scroll-indecator">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </main>
    )
}

export default HomePageSlider;