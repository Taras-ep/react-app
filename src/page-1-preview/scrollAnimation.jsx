import React, { useEffect, useState, useRef, useCallback } from "react"
import './scrollAnimation.css';
import SCROLL from './SCROLL.png'

const ScrollAnimation = ({scrollState}) => {

    const [elementStyle, setElementStyle] = useState({
        opacity: '1'
    });

    const ref = useCallback(node => {
        if (node !== null) {
            if (node.getBoundingClientRect().top <= 100) {
                    setElementStyle({animationName: 'scrollAnimation'})  
                } else {
                    setElementStyle({animationName: 'scrollAnimationBack'})
            }
        }
    }, [scrollState])  

    return (
        <div className="scroll-animation-main-container" ref={ref} style={elementStyle}>
            <div className="scroll-animation-container">
                <h1>
                    SCROLL
                </h1>
                <img src={SCROLL} alt="scroll-animation-container" className="element-1"/>
                <img src={SCROLL} alt="scroll-animation-container" className="element-2"/>
                <img src={SCROLL} alt="scroll-animation-container" className="element-3"/>
            </div>
        </div>
    )
}

export default ScrollAnimation