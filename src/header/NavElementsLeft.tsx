import React, { useRef, useEffect } from "react";
import './nav-elements.css'
import '../mediaRequests/header-media-requests.css';

interface PageIndex {
    props?: number
}

const NavElementsLeft = ({props}: PageIndex) => {
    let navMenuRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (navMenuRef.current) {
            if (props! > 0) {
                navMenuRef.current.style.animationDuration = '2s'
                navMenuRef.current.style.display = 'block'
                navMenuRef.current.style.animationName = 'navMenuAnimationForward'
            } else {
                navMenuRef.current.style.display = 'none'
            }
        }
    }, [props])

    return (
            <nav ref={navMenuRef} className="nav-menu" >
                <ul className="menu-left menu-elements">
                    <li><a href="">smartphones</a></li>
                    <li><a href="">tablets</a></li>
                    <li><a href="">camaras</a></li>
                    <li><a href="">accessories</a></li>
                </ul>
            </nav>
    )
}

export default NavElementsLeft