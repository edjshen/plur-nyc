'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import map to avoid SSR issues with Leaflet
const EventMap = dynamic(() => import('./EventMap'), { ssr: false });

export default function EventsClient({ events }) {
  const [view, setView] = useState('list');

  return (
    <div style={{
      background: 'var(--off-white)',
      minHeight: '100vh',
      borderBottom: '2px solid var(--black)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative background */}
      <div style={{
        position: 'absolute',
        top: 80,
        left: 0,
        right: 0,
        height: 250,
        opacity: 0.06,
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <svg width="800" height="200" viewBox="0 0 800 200" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round">
          <path d="M0,100 Q100,50 200,100 Q300,150 400,100 Q500,50 600,100 Q700,150 800,100" />
          <path d="M0,120 Q100,70 200,120 Q300,170 400,120 Q500,70 600,120 Q700,170 800,120" />
          <circle cx="200" cy="80" r="20" />
          <circle cx="600" cy="80" r="20" />
        </svg>
      </div>

      <div className="section" style={{ paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', zIndex: 1 }}>
        {/* Header + Toggle */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '4rem',
          borderBottom: '2px solid var(--black)',
          paddingBottom: '2rem',
          gap: '1.5rem',
        }}>
          <div>
            <h1 className="font-display" style={{
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              fontWeight: 700,
              color: 'white',
              background: 'var(--teal-dark)',
              padding: '0.5rem 1rem',
              border: '2px solid var(--black)',
              boxShadow: '6px 6px 0 var(--black)',
              transform: 'rotate(-2deg)',
              display: 'inline-block',
              marginBottom: '1rem',
            }}>
              The Archives
            </h1>
            <p style={{
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '1.1rem',
              maxWidth: 500,
              marginTop: '1rem',
              paddingLeft: '1rem',
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 3,
                borderRadius: 2,
                background: 'var(--teal)',
                opacity: 0.7,
              }} />
              Explore our history of NYC takeovers. We prioritize raw energy, secret locations, and bass you can feel in your bones.
            </p>
          </div>

          <div className="view-toggle">
            <button
              className={view === 'list' ? 'active' : ''}
              onClick={() => setView('list')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
              List
            </button>
            <button
              className={view === 'map' ? 'active' : ''}
              onClick={() => setView('map')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
                <path d="M15 5.764v15M9 3.236v15" />
              </svg>
              Map
            </button>
          </div>
        </div>

        {/* Content area */}
        <div style={{ minHeight: 600, width: '100%', position: 'relative' }}>
          {view === 'list' ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
            }}>
              {events.map((event, i) => (
                <div key={event.id} className="card" style={{
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease forwards ${0.05 + i * 0.1}s`,
                }}>
                  {/* Decorative X */}
                  <svg style={{ position: 'absolute', top: 8, right: 8, width: 24, height: 24, opacity: 0.15 }} viewBox="0 0 50 50" fill="none" stroke="var(--teal)" strokeWidth="2">
                    <path d="M10,10 L40,40 M40,10 L10,40" />
                  </svg>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <span className="tag tag-red" style={{ fontSize: '0.8rem', marginBottom: '0.75rem', display: 'inline-block' }}>
                      {event.date ? new Date(event.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'TBA'}
                    </span>
                    <h3 className="font-display" style={{
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.15,
                      marginTop: '0.5rem',
                    }}>{event.name}</h3>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                    {event.description}
                  </p>

                  {event.location && (
                    <div className="tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
                        <path d="M15 5.764v15M9 3.236v15" />
                      </svg>
                      {event.location}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              width: '100%',
              height: 650,
              borderRadius: 16,
              border: '4px solid var(--black)',
              boxShadow: '8px 8px 0 var(--teal)',
              overflow: 'hidden',
              position: 'relative',
              background: 'white',
            }}>
              <div style={{
                position: 'absolute',
                top: 16,
                left: 16,
                zIndex: 1000,
                background: 'white',
                border: '3px solid var(--black)',
                padding: '0.25rem 0.75rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                boxShadow: '3px 3px 0 var(--black)',
              }}>
                Event Locations
              </div>
              <EventMap events={events} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
