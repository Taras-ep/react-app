import './App.css';
import React, { createContext, useRef } from 'react';
import { useEffect, useState } from 'react';
import Preview from './page-1-preview/preview.jsx'
import Home from './page-2-home/Home.jsx';
import ScrollAnimator from './utils/ScrollAnimator.ts';
import ScrollAnimatorContext from './utils/ScrollAnimatorContext.ts';

const scrollAnimator = new ScrollAnimator()
function App() {

  const [scrollState, setScrollState] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      setScrollState(currentScrollPosition)
      scrollAnimator.setScroll(currentScrollPosition)
    }
    window.addEventListener('scroll', handleScroll)

    scrollAnimator.setWindowHeight(window.innerHeight)
    window.addEventListener('resize', () => scrollAnimator.setWindowHeight(window.innerHeight))
  }, []);

  return (
    <ScrollAnimatorContext.Provider value={scrollAnimator}>
      <div className="App">
        <Preview scrollState={scrollState} />
        <Home scrollState={scrollState} />
      </div>
    </ScrollAnimatorContext.Provider>
  );
}

export default App;
