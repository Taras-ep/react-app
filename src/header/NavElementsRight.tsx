import React, { useRef, useEffect } from "react";
import './nav-elements.css'
import '../mediaRequests/header-media-requests.css';

const search = require('../assets/search.png')
const shoppingCart = require('../assets/shopping-cart.png')

interface PageIndex {
    props?: number
}

const NavElementsRight = ({props}: PageIndex) => {
        let navMenuRef = useRef<HTMLElement | null>(null)
    
        useEffect(() => {
            if (navMenuRef.current) {
                if (props! > 0) {
                    navMenuRef.current.style.animationDuration = '3s'
                    navMenuRef.current.style.display = 'block'
                    navMenuRef.current.style.animationName = 'navMenuAnimationForward'
                } else {
                   navMenuRef.current.style.display = 'none'
                }
            }
        }, [props])

    return (
            <nav ref={navMenuRef} className="nav-menu" >
                <ul className="menu-right menu-elements">
                    <li><a href="">compare</a></li>
                    <li><a href="">support</a></li>
                    <li><a href="">sign up</a></li>
                    <li><a href=""><img src={search} alt='Not found'></img></a></li>
                    <li><a href=""><img src={shoppingCart} alt='Not found'></img></a></li>
                </ul>
            </nav>
    )
}

export default NavElementsRight