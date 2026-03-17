'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const CommunityMap = dynamic(() => import('./CommunityMap'), { ssr: false });

const orgs = {
  'DJs & Producers': [
    {
      name: 'Basement NYC',
      location: 'Brooklyn, NY',
      desc: 'Underground DJ collective pushing the boundaries of warehouse techno and experimental bass.',
      lat: 40.6782, lng: -73.9442,
    },
    {
      name: 'Voltage Collective',
      location: 'Queens, NY',
      desc: 'Queens-based crew blending drum & bass, jungle, and hardcore into unforgettable sets.',
      lat: 40.7282, lng: -73.7949,
    },
  ],
  'Venues & Spaces': [
    {
      name: 'The Lot Radio',
      location: 'Williamsburg, NY',
      desc: 'Community radio station and outdoor venue at the heart of Brooklyn\'s underground music scene.',
      lat: 40.7117, lng: -73.9621,
    },
    {
      name: 'Nowadays',
      location: 'Ridgewood, NY',
      desc: 'Indoor/outdoor club with a massive garden, world-class sound system, and zero attitude.',
      lat: 40.7000, lng: -73.9059,
    },
  ],
  'Collectives & Communities': [
    {
      name: 'Sustain Release',
      location: 'Upstate, NY',
      desc: 'Annual camping festival that brings NYC\'s underground community to the great outdoors.',
      lat: 41.6548, lng: -74.6919,
    },
    {
      name: 'Honcho',
      location: 'Brooklyn, NY',
      desc: 'Queer techno party celebrating inclusivity, freedom of expression, and relentless bass.',
      lat: 40.6892, lng: -73.9530,
    },
  ],
};

const allLocations = Object.values(orgs).flat();

export default function CommunityPage() {
  return (
    <div style={{
      background: 'var(--warm-gray)',
      minHeight: '100vh',
      borderBottom: '4px solid var(--black)',
    }}>
      <div className="section" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: 700, margin: '0 auto 5rem' }}>
          <h1 className="font-display" style={{
            fontSize: 'clamp(3rem, 7vw, 5rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            display: 'inline-block',
            borderBottom: '6px solid var(--red)',
            paddingBottom: '0.5rem',
            opacity: 0,
            animation: 'fadeInUp 0.6s ease forwards 0.1s',
          }}>
            The Hub
          </h1>
          <p style={{
            fontSize: '1.1rem',
            fontWeight: 500,
            color: 'var(--text-primary)',
            borderLeft: '4px solid var(--black)',
            paddingLeft: '1.5rem',
            textAlign: 'left',
            maxWidth: 600,
            margin: '2rem auto 0',
            background: 'white',
            padding: '1rem 1.5rem',
            border: '3px solid var(--black)',
            boxShadow: '4px 4px 0 var(--red)',
            opacity: 0,
            animation: 'fadeInUp 0.6s ease forwards 0.25s',
          }}>
            PLUR NYC connects with incredible collectives, venues, and artists across the city. Discover the network that keeps the underground alive and thriving.
          </p>
        </div>

        {/* Content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
        }}>
          {/* Left: Org directory */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              maxHeight: 700,
              overflowY: 'auto',
              paddingRight: '1rem',
            }} className="custom-scrollbar">
              {Object.entries(orgs).map(([category, items], ci) => (
                <div key={category} style={{ marginBottom: '1rem' }}>
                  <h2 className="font-display" style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    background: 'white',
                    border: '3px solid var(--black)',
                    padding: '0.5rem 1rem',
                    boxShadow: '4px 4px 0 var(--teal)',
                    transform: 'rotate(-1deg)',
                    marginBottom: '1.5rem',
                  }}>
                    {category === 'DJs & Producers' && '🎧'}
                    {category === 'Venues & Spaces' && '🏛️'}
                    {category === 'Collectives & Communities' && '🤝'}
                    {category}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {items.map((org, oi) => (
                      <div key={oi} style={{
                        background: 'white',
                        padding: '1.5rem',
                        borderRadius: 12,
                        border: '3px solid var(--black)',
                        boxShadow: '5px 5px 0 var(--black)',
                        transition: 'transform 0.2s',
                        opacity: 0,
                        animation: `fadeInUp 0.5s ease forwards ${0.3 + ci * 0.15 + oi * 0.1}s`,
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                          <h3 className="font-display" style={{
                            fontSize: '1.3rem',
                            fontWeight: 900,
                            color: 'var(--text-primary)',
                            maxWidth: '65%',
                          }}>{org.name}</h3>
                          <span style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            background: 'var(--black)',
                            color: 'white',
                            padding: '0.2rem 0.6rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            transform: 'rotate(-2deg)',
                          }}>{org.location}</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.5 }}>{org.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Map */}
            <div style={{
              width: '100%',
              height: 700,
              borderRadius: 16,
              border: '6px solid var(--black)',
              boxShadow: '10px 10px 0 var(--red)',
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
                fontWeight: 800,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                boxShadow: '3px 3px 0 var(--black)',
              }}>
                NYC Underground Network
              </div>
              <CommunityMap locations={allLocations} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
