import React, { useState, useRef, useEffect } from "react";
import iphonePreview from './iphone-preview.png'
import pixelPreview from './pixel-preview.png'
import iphoneCameraInside from './iphone-camera-inside.png'
import './preview.css'
import Logo from './logo.jsx'
import Scroll from './scrollAnimation.jsx'

const Preview = () => {

    const [scrollState, setScrollState] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY
            setScrollState(currentScrollPosition)
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="container">
            <Logo scrollState={scrollState} />
            <div className="img-container-1">
                <img src={iphoneCameraInside} className="iphone-camera-inside-preview" alt="picture not available" />
            </div>
            <div className="img-container-2">
                <img src={iphonePreview} className="iphone-preview" alt="picture not available" />
                <img src={pixelPreview} className="pixel-preview" alt="picture not available" />
            </div>
            <Scroll scrollState={scrollState}/>
        </div>
    )
}

export default Preview