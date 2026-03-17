'use client';

import { useEffect, useRef } from 'react';

export default function CommunityMap({ locations }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapInstanceRef.current) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    import('leaflet').then((L) => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const map = L.map(mapRef.current, {
        center: [40.72, -73.95],
        zoom: 11,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      const redIcon = L.divIcon({
        className: '',
        html: `<div style="
          width: 24px;
          height: 24px;
          background: #DC2626;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4), 0 0 12px rgba(220,38,38,0.4);
        "></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -14],
      });

      locations.forEach((loc) => {
        if (loc.lat && loc.lng) {
          L.marker([loc.lat, loc.lng], { icon: redIcon })
            .addTo(map)
            .bindPopup(`
              <div style="font-family: 'Space Grotesk', sans-serif; padding: 4px;">
                <strong style="font-size: 1rem; color: #0A0A0A;">${loc.name}</strong>
                <br/>
                <span style="font-size: 0.8rem; color: #666;">${loc.location}</span>
              </div>
            `);
        }
      });

      mapInstanceRef.current = map;
      setTimeout(() => map.invalidateSize(), 200);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [locations]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
}
