export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-widest text-white">PLUR</span>
          <ul className="hidden md:flex gap-8 text-sm tracking-wider text-white/70">
            <li><a href="#home" className="hover:text-white transition-colors">HOME</a></li>
            <li><a href="#events" className="hover:text-white transition-colors">EVENTS</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">ABOUT</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">CONTACT</a></li>
          </ul>
          {/* Mobile menu — text links */}
          <ul className="flex md:hidden gap-5 text-xs tracking-wider text-white/70">
            <li><a href="#events" className="hover:text-white transition-colors">EVENTS</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">ABOUT</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">CONTACT</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-32 min-h-screen"
        style={{
          background:
            "radial-gradient(ellipse at center, #1a003a 0%, #000000 70%)",
        }}
      >
        <h1 className="text-8xl md:text-[12rem] font-black tracking-widest text-white mb-4 leading-none">
          PLUR
        </h1>
        <p className="text-lg md:text-2xl tracking-[0.3em] text-purple-300 mb-12 uppercase">
          Peace&nbsp;·&nbsp;Love&nbsp;·&nbsp;Unity&nbsp;·&nbsp;Respect
        </p>
        <a
          href="#events"
          className="inline-block px-10 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold tracking-widest uppercase text-sm rounded-full transition-colors duration-200"
        >
          See Upcoming Events
        </a>
      </section>

      {/* Events Placeholder */}
      <section id="events" className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase mb-6 text-white">
            Events
          </h2>
          <p className="text-white/50 text-lg tracking-wide">
            Upcoming events coming soon — stay tuned.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase mb-6 text-white">
            About
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            PLUR NYC is an underground events collective rooted in the original
            rave values — Peace, Love, Unity, and Respect. We curate intimate,
            high-energy experiences for NYC&apos;s bass music community.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-neutral-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase mb-6 text-white">
            Contact
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-8">
            Bookings, collabs, and press inquiries welcome.
          </p>
          <a
            href="mailto:hello@plur.nyc"
            className="inline-block px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 rounded-full text-sm tracking-widest uppercase transition-colors duration-200"
          >
            hello@plur.nyc
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/40 text-sm tracking-widest">
            © 2026 PLUR NYC
          </span>
          <div className="flex gap-6 text-white/40 text-sm tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">SoundCloud</a>
            <a href="#" className="hover:text-white transition-colors">ResidentAdvisor</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
