export const metadata = {
  title: 'The Crew — PLUR NYC',
  description: 'Meet the people behind PLUR NYC. The organizers, DJs, and community builders making the underground come alive.',
};

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder / Head of Vibes',
    bio: 'Started throwing warehouse parties in college. Still hasn\'t stopped.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
    accent: 'teal',
  },
  {
    name: 'Maya Chen',
    role: 'Community Lead',
    bio: 'Knows every raver in NYC by name. Somehow always at the front of the crowd.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face',
    accent: 'red',
  },
  {
    name: 'Jamal Thompson',
    role: 'Music Director',
    bio: 'Curates lineups that make your ears and your soul vibrate at the same frequency.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face',
    accent: 'teal',
  },
  {
    name: 'Luna Park',
    role: 'Partnerships',
    bio: 'Connects venues, artists, and brands. The reason we have the good speakers.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face',
    accent: 'red',
  },
  {
    name: 'Diego Santos',
    role: 'Logistics',
    bio: 'Sound checks at 2 PM, doors at 10 PM. The reason everything actually works.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
    accent: 'teal',
  },
  {
    name: 'Priya Sharma',
    role: 'Creative Director',
    bio: 'Designs the flyers you screenshot. The visuals you can\'t forget.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face',
    accent: 'red',
  },
];

export default function TeamPage() {
  return (
    <div style={{
      background: 'var(--off-white)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      paddingBottom: '6rem',
      borderBottom: '2px solid var(--black)',
    }}>
      {/* Decorative SVGs */}
      <svg style={{ position: 'absolute', top: 160, right: 40, width: 120, height: 120, opacity: 0.06, pointerEvents: 'none' }} viewBox="0 0 100 100" fill="var(--teal)" stroke="none">
        <polygon points="50,10 60,40 90,50 60,60 50,90 40,60 10,50 40,40" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 200, left: 40, width: 160, height: 160, opacity: 0.05, pointerEvents: 'none' }} viewBox="0 0 100 100" fill="none" stroke="var(--teal)" strokeWidth="2">
        <circle cx="50" cy="50" r="45" strokeDasharray="5 5" />
      </svg>

      <div className="section" style={{ paddingTop: '6rem', paddingBottom: '2rem', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h1 className="font-display" style={{
            fontSize: 'clamp(3rem, 7vw, 5rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.04em',
            marginBottom: '1rem',
            display: 'inline-block',
            position: 'relative',
          }}>
            The Crew
            <svg style={{ position: 'absolute', bottom: -6, left: 0, width: '100%', height: 8 }} viewBox="0 0 200 20" fill="none" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round">
              <path d="M10,10 Q100,20 190,5" />
            </svg>
          </h1>
          <br />
          <span className="font-display" style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            fontSize: '1.3rem',
            fontWeight: 600,
            background: 'var(--red)',
            color: 'white',
            padding: '0.4rem 1rem',
            border: '2px solid var(--black)',
            transform: 'rotate(2deg)',
          }}>
            Making the underground come alive in NYC
          </span>
        </div>

        {/* Team Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem 3rem',
        }}>
          {team.map((member, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              opacity: 0,
              animation: `fadeInUp 0.6s ease forwards ${0.1 + i * 0.12}s`,
            }}>
              {/* Photo */}
              <div style={{
                position: 'relative',
                width: 256,
                height: 320,
                marginBottom: '2rem',
                border: '2px solid var(--black)',
                boxShadow: `6px 6px 0 var(--${member.accent})`,
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              className="team-photo-wrap"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-photo"
                />
              </div>

              {/* Info card */}
              <div className="card" style={{
                width: '100%',
                marginTop: '-4rem',
                zIndex: 2,
                position: 'relative',
                boxShadow: member.accent === 'red' ? '4px 4px 0 var(--red)' : '4px 4px 0 var(--teal)',
              }}>
                <h3 className="font-display" style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                }}>{member.name}</h3>
                <span className="font-display" style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: `var(--${member.accent})`,
                  display: 'block',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.02em',
                }}>{member.role}</span>
                <p style={{ fontSize: '0.95rem', opacity: 0.85, lineHeight: 1.5 }}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
