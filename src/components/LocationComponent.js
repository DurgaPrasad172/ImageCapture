// src/components/LocationComponent.js
import React from 'react';
import { useGeolocated } from 'react-geolocated';

const LocationComponent = ({ children }) => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated();
    console.log(coords);
    if (!isGeolocationAvailable) {
        return <div>Your browser does not support Geolocation</div>;
    } else if (!isGeolocationEnabled) {
        return <div>Geolocation is not enabled</div>;
    } else if (coords) {
        return <div>{children(coords)}</div>;
    } else {
        return <div>Getting the location data…</div>;
    }
};

export default LocationComponent;
