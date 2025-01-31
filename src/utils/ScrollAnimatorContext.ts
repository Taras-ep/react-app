import { createContext } from 'react';
import ScrollAnimator from './ScrollAnimator';

const ScrollAnimatorContext = createContext<ScrollAnimator | null>(null)

export default ScrollAnimatorContext