import React, { useEffect, useContext, useRef, useState} from "react"
import './header.css';
import ScrollAnimatorContext from "../utils/ScrollAnimatorContext.ts";
import ScrollAnimator, { ScrollData } from "../utils/ScrollAnimator.ts";
import NavElementsRight from './NavElementsRight.tsx'
import NavElementsLeft from "./NavElementsLeft.tsx";
import '../mediaRequests/header-media-requests.css';
import HamburgerMenu from "./HamburgerMenu.tsx";

const Logo = ({ scrollState }) => {
    let logoRef = useRef(null)
    const scrollAnimator: ScrollAnimator = useContext<ScrollAnimator>(ScrollAnimatorContext)
    let [pageIndexParam, setPageIndexParam] = useState(null)

    function setPageIndex(pageIndex: number) {
        if(pageIndexParam !== pageIndex) {
            setPageIndexParam(pageIndex)
        }
    }

    const lastNotStickyScroll = useRef<number>(null)
    const lastNotFixedFontSize = useRef<number>(null)

    useEffect(() => {

        const logoCenterPositionPixels = logoRef.current.getBoundingClientRect().top

        let listenerId = scrollAnimator.addOnScrollListener((scroll: ScrollData) => {

            setPageIndex(scroll.pageIndex)

            if (scroll.pageIndex == 0) {    

                if (lastNotStickyScroll.current != null && scroll.k < lastNotStickyScroll.current) {
                    logoRef.current.style.transform = 'translate(0%, -50%)'
                    logoRef.current.style.top = '50%'
                    logoRef.current.style.position = 'absolute'
                    lastNotStickyScroll.current = null
                }

                if (logoRef.current.getBoundingClientRect().top <= 0) {
                    if (lastNotStickyScroll.current == null || scroll.k >= lastNotStickyScroll.current) {

                        if (lastNotStickyScroll.current == null) {
                            lastNotStickyScroll.current = scroll.k
                        }

                        let stickyRelativeScroll = (scroll.k - lastNotStickyScroll.current) / (1 - lastNotStickyScroll.current)
                        logoRef.current.style.position = 'sticky'



                        logoRef.current.style.height = `${16.5 - (12 * stickyRelativeScroll)}rem`
                        logoRef.current.style.fontSize = `${6.25 - (5.5 * stickyRelativeScroll)}rem`

                        logoRef.current.style.transform = 'translate(0%, 0%)'
                        logoRef.current.style.top = '0%'


                        if (logoRef.current.getBoundingClientRect().bottom <= 103) {
                            if (lastNotFixedFontSize.current == null) {
                                lastNotFixedFontSize.current = `${6.25 - (5.5 * stickyRelativeScroll)}rem`
                            }

                            let currentWindowSize = logoRef.current.getBoundingClientRect().bottom
                            logoRef.current.style.fontSize = lastNotFixedFontSize.current || '1.70rem'
                            logoRef.current.style.position = 'fixed'
                            logoRef.current.style.height = '103px'
                            // currentWindowSize / 105 -> 0 .. 1; 0 .. 1 -> 0.4 .. 1
                            logoRef.current.style.backgroundColor = `rgba(0, 0, 0, ${0.7 + (0.3 - (currentWindowSize * 0.3) / 105)})`

                        }

                    }


                }
                //logoRef.current.style.left = `${100 - (scroll * 10) % 1 * 200}%`
            }
        })

        return () => {

        }
    }, [])

    return (
        <div ref={logoRef} className="logo-container">
            <HamburgerMenu/>
            <NavElementsLeft props={pageIndexParam}/>
            <h1>
                CAMSTOREX
            </h1>
            <NavElementsRight props={pageIndexParam}/>
        </div>
    )
}

export default Logo;




/*const [elementStyle, setElementStyle] = useState(defaultLogoPosition);
const lastNotStickyScroll = useRef(null)

let ref = useCallback(element => {
    if (element !== null && element.getBoundingClientRect().top <= 0) {
        if (lastNotStickyScroll.current != null && scrollState < lastNotStickyScroll.current) {
            setElementStyle(defaultLogoPosition)
            lastNotStickyScroll.current = null   
        } else {
            setElementStyle(stickyLogoPosition)
            if (lastNotStickyScroll.current == null) {
                lastNotStickyScroll.current = scrollState
            }
        }
    }
}, [scrollState])
*/