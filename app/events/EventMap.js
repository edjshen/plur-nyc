'use client';

import { useEffect, useRef } from 'react';

export default function EventMap({ events }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapInstanceRef.current) return; // already initialized

    // Dynamically import leaflet CSS and JS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    import('leaflet').then((L) => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const map = L.map(mapRef.current, {
        center: [40.7128, -73.95],
        zoom: 11,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      // Dark-themed tile layer for rave aesthetic
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      // Custom teal marker icon
      const tealIcon = L.divIcon({
        className: '',
        html: `<div style="
          width: 28px;
          height: 28px;
          background: #0D9488;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4), 0 0 16px rgba(13,148,136,0.4);
        "></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -16],
      });

      events.forEach((event) => {
        if (event.lat && event.lng) {
          L.marker([event.lat, event.lng], { icon: tealIcon })
            .addTo(map)
            .bindPopup(`
              <div style="font-family: 'Space Grotesk', sans-serif; padding: 4px;">
                <strong style="font-size: 1.05rem; color: #0A0A0A;">${event.name}</strong>
                <br/>
                <span style="font-size: 0.85rem; color: #666;">${event.location}</span>
                ${event.date ? `<br/><span style="font-size: 0.8rem; color: #0D9488; font-weight: 600;">${event.date}</span>` : ''}
              </div>
            `);
        }
      });

      mapInstanceRef.current = map;

      // Force resize after mount
      setTimeout(() => map.invalidateSize(), 200);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [events]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
}
