import React, { useEffect, useState, useRef, useCallback } from "react"
import './logo.css';

const Logo = ({ scrollState }) => {

    const [elementStyle, setElementStyle] = useState({
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
    });

    const lastNotStickyScroll = useRef(null)

    const ref = useCallback(node => {
        if (node !== null) {
            if (node.getBoundingClientRect().top <= 0) {
                if (lastNotStickyScroll.current != null && scrollState < lastNotStickyScroll.current) {
                    setElementStyle({ position: 'absolute', top: '50%', transform: 'translate(0, -50%)', animationName: 'onScrollAnimationBackScroll'})
                    lastNotStickyScroll.current = null   
                } else {
                    setElementStyle({ position: 'sticky', top: '0%', transform: 'translate(0%, 0%)', animationName: 'onScrollAnimation'})
                    if (lastNotStickyScroll.current == null) {
                        lastNotStickyScroll.current = scrollState
                    }
                }
            }
        }
    }, [scrollState])

    return (
        <div className="logo-container" ref={ref} style={elementStyle}>
            <h1>
                CAMSTOREX
            </h1>
        </div>
    )
}

export default Logo;