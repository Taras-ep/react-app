import iphonePreview from './iphone-preview.png'
import pixelPreview from './pixel-preview.png'
import iphoneCameraInside from './iphone-camera-inside.png'
import './preview.css'
import Header from '../header/header.tsx'
import Scroll from './scrollAnimation.jsx'
import '../mediaRequests/media-requests-page-1.css'

const Preview = ({scrollState}) => {
    return (
        <div className="container">
            <Header scrollState={scrollState} />
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