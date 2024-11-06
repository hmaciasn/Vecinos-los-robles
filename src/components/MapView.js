import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Header from './Header';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Reemplaza con tu token de Mapbox

function MapView() {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.5, 40],
            zoom: 9
        });

        // Ejemplo de marcador (reemplaza con datos dinámicos)
        new mapboxgl.Marker().setLngLat([-74.5, 40]).addTo(map);

        return () => map.remove();
    }, []);

    return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
}

export default MapView;
