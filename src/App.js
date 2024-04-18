// App.js
import React from 'react';
import CameraComponent from './components/CameraComponent';
import LocationComponent from './components/LocationComponent';

function App() {
    return (
        <div className="App">
            <h1>Image Capture App</h1>
            <LocationComponent>
                {({ coords }) => (
                    <CameraComponent coords={coords} />
                )}
            </LocationComponent>
        </div>
    );
}

export default App;
