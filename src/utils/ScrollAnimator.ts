
export class ScrollData {
    readonly k: number
    readonly pixels: number
    readonly windowHeight: number
    readonly pageIndex: number

    constructor(k: number,
        pixels: number,
        windowHeight: number,
        pageIndex: number) {
            this.k = k
            this.pixels = pixels
            this.windowHeight = windowHeight
            this.pageIndex = pageIndex
    }
}

type ScrollListenerCallback = (scroll: ScrollData) => void



class ScrollAnimator {

    private windowHeight: number
    private scrollState: number = 0
    private windowScrollIndex: number

    private listeners: { [key: number]: ScrollListenerCallback } = {}
    private idCounter: number = 0

    setWindowHeight(windowHeight: number) {
        this.windowHeight = windowHeight
        this.notifyListeners(this.scrollState)
    }

    setScroll(newScrollState: number) {
        let oldScrollState = this.scrollState
        this.scrollState = newScrollState

        // fill scroll gaps
        const FILL_GAP_SIZE = 50
        let diff = newScrollState - oldScrollState
        if (diff > 0) {
            for (let y = oldScrollState + FILL_GAP_SIZE; y < newScrollState; y += FILL_GAP_SIZE) {
                this.notifyListeners(y)
            }
        } else if (diff < 0) {
            for (let y = oldScrollState - FILL_GAP_SIZE; y > newScrollState; y -= FILL_GAP_SIZE) {
                this.notifyListeners(y)
            }
        }

        let oldPageIndex = this.calculateCurrentPageIndex(oldScrollState)
        let newPageIndex = this.calculateCurrentPageIndex(newScrollState)

        let pageDiff = newPageIndex - oldPageIndex
        if (pageDiff > 0) {
            this.notifyListeners((oldPageIndex + 1) * this.windowHeight - 1)
        } else if (pageDiff < 0) {
            this.notifyListeners((oldPageIndex) * this.windowHeight + 1)
        }


        this.notifyListeners(this.scrollState)
    }

    private notifyListeners(currentScrollState: number) {
        const currentPageIndex = this.calculateCurrentPageIndex(currentScrollState)
        const scrollStateOnCurrentPage = this.calculateScrollStateOnCurrentPage(currentScrollState)
        let data = new ScrollData(scrollStateOnCurrentPage, currentScrollState * this.windowHeight, this.windowHeight, currentPageIndex)
        for (let key in this.listeners) {
            this.listeners[key](data)
        }
    }

    private calculateCurrentPageIndex(currentScrollState: number): number {
        this.windowScrollIndex = currentScrollState / this.windowHeight
        if (this.windowScrollIndex > 0) return Math.floor(this.windowScrollIndex)
        return 0
    }

    private calculateScrollStateOnCurrentPage(currentScrollState: number): number {
        const result = (currentScrollState - (this.windowHeight * this.calculateCurrentPageIndex(currentScrollState))) / this.windowHeight
        return result
    }

    addOnScrollListener(callback: ScrollListenerCallback): number {
        this.listeners[this.idCounter] = callback
        return this.idCounter++
    }

    removeOnScrollListener(listenerId: number) {
        delete this.listeners[listenerId]
    }
}

export default ScrollAnimator