// src/components/CameraComponent.js
import React, { useRef,useState} from 'react';
import Webcam from 'react-webcam';
import storeImageAndLocation from '../firebase';

const CameraComponent = ({ coords }) => {
    const webcamRef = useRef(null);
     
    const [isCameraReady, setCameraReady] = useState(false);

    const handleLoad = () => {
        setCameraReady(true);
    };

    const capture = () => {
        console.log('Capture button clicked');
        const imageData = webcamRef.current.getScreenshot();
        const locationData = {
            latitude: coords.latitude,
            longitude: coords.longitude,
        };
        storeImageAndLocation(imageData, locationData);
    };

    return (
        <div>
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" onUserMedia={handleLoad}  />
            <button onClick={capture} disabled={!coords || !isCameraReady}>Capture</button>
       
        </div>
    );
};

export default CameraComponent;
