import Link from 'next/link';

export const metadata = {
  title: 'PLUR NYC — Underground Rave Community',
  description: 'NYC\'s underground rave community. Peace, Love, Unity, Respect. Secret locations, world-class DJs, unforgettable nights.',
};

export default function Home() {
  return (
    <div style={{ flex: 1, width: '100%', overflow: 'hidden' }}>
      {/* ── Hero ────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        borderBottom: '2px solid var(--black)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.8) 100%)',
          zIndex: 1,
        }} />
        <div className="noise-overlay" />

        {/* Decorative accent lines */}
        <svg style={{ position: 'absolute', top: 40, right: 40, width: 100, height: 100, opacity: 0.12, zIndex: 2, pointerEvents: 'none' }} viewBox="0 0 100 100" fill="none" stroke="var(--teal)" strokeWidth="1.5">
          <circle cx="50" cy="50" r="45" strokeDasharray="8 6" />
          <circle cx="50" cy="50" r="30" strokeDasharray="4 6" />
        </svg>

        <div style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5rem 1.5rem 4rem',
          textAlign: 'center',
          maxWidth: 900,
        }}>
          <span className="animate-fade-in-down" style={{
            display: 'inline-block',
            background: 'var(--red)',
            color: 'white',
            padding: '0.5rem 1.25rem',
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            marginBottom: '1.5rem',
            border: '2px solid rgba(255,255,255,0.2)',
            transform: 'rotate(-2deg)',
          }}>
            NYC Underground Rave Collective
          </span>

          <h1 className="animate-fade-in-down delay-100" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 700,
            color: 'white',
            lineHeight: 0.95,
            marginBottom: '1.5rem',
            letterSpacing: '-0.04em',
          }}>
            The{' '}
            <span style={{ color: 'var(--teal-light)', display: 'inline-block', transform: 'rotate(-2deg)' }}>
              Underground
            </span>
            <br />
            is Calling.
          </h1>

          <p className="animate-fade-in-up delay-200" style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: 560,
            margin: '0 auto 2.5rem',
            paddingLeft: '1.5rem',
            textAlign: 'left',
            position: 'relative',
            lineHeight: 1.6,
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 3,
              background: 'var(--red)',
              borderRadius: 2,
              opacity: 0.9,
            }} />
            From hidden warehouses in Bushwick to rooftops in Williamsburg — we curate unforgettable experiences where bass meets community. Come for the music, stay for the family.
          </p>

          <div className="animate-fade-in-up delay-300" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Link href="/events/" className="btn-primary" style={{ fontSize: '1.3rem', padding: '1rem 2.5rem' }}>
              Find Next Event
            </Link>
            <Link href="/community/" className="btn-secondary" style={{ fontSize: '1.2rem' }}>
              Join the Community
            </Link>
          </div>
        </div>

        {/* Floating accent photos */}
        <div className="animate-fade-in-up delay-500" style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '2rem',
          zIndex: 10,
          opacity: 0.6,
        }}>
          <span style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '1.4rem',
            color: 'white',
            transform: 'rotate(-3deg)',
          }}>peace ✌️</span>
          <span style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '1.4rem',
            color: 'white',
            transform: 'rotate(2deg)',
          }}>love 💖</span>
          <span style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '1.4rem',
            color: 'white',
            transform: 'rotate(-1deg)',
          }}>unity 🤝</span>
          <span style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '1.4rem',
            color: 'white',
            transform: 'rotate(3deg)',
          }}>respect 🙏</span>
        </div>
      </section>

      {/* ── Vibe Check ──────────────────────────────────── */}
      <section style={{
        padding: '6rem 0',
        background: 'var(--warm-gray)',
        borderBottom: '2px solid var(--black)',
        position: 'relative',
      }}>
        <div className="section">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="font-display" style={{
              fontSize: '3rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              display: 'inline-block',
              position: 'relative',
            }}>
              The Vibe Check
              <svg style={{ position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)', width: 250, height: 12 }} viewBox="0 0 200 20" fill="none" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round">
                <path d="M10,10 Q100,20 190,5" />
              </svg>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { icon: '🎵', title: 'Underground Music', desc: 'World-class DJs in secret locations. Techno, house, drum & bass — if the walls shake, we\'re home.', accent: 'var(--teal)' },
              { icon: '🤝', title: 'Deep Connections', desc: 'Skip the small talk. The dance floor is where strangers become family at 3 AM.', accent: 'var(--red)' },
              { icon: '📍', title: 'Secret Locations', desc: 'Warehouses, rooftops, tunnels. You won\'t find us on Google Maps. Check your DMs.', accent: 'var(--teal)' },
              { icon: '⚡', title: 'Pure Energy', desc: 'No pretense, no dress code, no VIP. Just raw, honest energy and bass you can feel in your chest.', accent: 'var(--red)' },
            ].map((item, i) => (
              <div key={i} className={`card ${item.accent === 'var(--red)' ? 'card-red' : ''}`} style={{ opacity: 0, animation: `fadeInUp 0.6s ease forwards ${0.1 + i * 0.15}s` }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '1.05rem', opacity: 0.85, lineHeight: 1.6 }}>{item.desc}</p>
                <div style={{ position: 'absolute', top: 12, right: 12, width: 8, height: 8, borderRadius: '50%', background: item.accent, opacity: 0.5 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── By The Numbers ──────────────────────────────── */}
      <section style={{
        padding: '6rem 0',
        background: 'var(--off-white)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <svg style={{ position: 'absolute', top: 30, left: 20, width: 80, height: 80, opacity: 0.08, pointerEvents: 'none' }} viewBox="0 0 100 100" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round">
          <path d="M20,50 Q50,10 80,50 Q50,90 20,50 Z" />
          <path d="M35,50 Q50,30 65,50 Q50,70 35,50 Z" />
        </svg>

        <div className="section" style={{ textAlign: 'center' }}>
          <h2 className="font-display" style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            marginBottom: '4rem',
            color: 'var(--text-primary)',
          }}>
            By The{' '}
            <span style={{
              color: 'var(--teal)',
              position: 'relative',
              display: 'inline-block',
            }}>Numbers</span>
          </h2>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '3rem',
          }}>
            {[
              { num: '2k+', label: 'Ravers' },
              { num: '50+', label: 'Events' },
              { num: '5', label: 'Boroughs' },
              { num: '∞', label: 'Bass Drops' },
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0, animation: `fadeInUp 0.6s ease forwards ${0.1 + i * 0.15}s` }}>
                <div className="font-display" style={{
                  fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                  fontWeight: 700,
                  color: 'var(--teal)',
                  marginBottom: '0.5rem',
                }}>
                  {stat.num}
                </div>
                <div className="font-display" style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  background: 'var(--red)',
                  color: 'white',
                  padding: '0.25rem 1rem',
                  border: '2px solid var(--black)',
                  transform: 'rotate(2deg)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
