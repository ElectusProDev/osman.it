import { useEffect, useRef, useState } from 'react';
import { assets } from '../assets';

export function Logo({ footer = false }) {
  return <a className={`logo ${footer ? 'footer-logo' : ''}`} href="#home" aria-label="OSMAN IT home"><span className="logo-mark"><img src={assets.header.imgGraduationCap} alt="" /></span><span>OSMAN IT</span></a>;
}

export default function Header({ query, onSearch, onCategory, onAuth }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const dropdown = useRef(null);
  useEffect(() => {
    const close = e => { if (!dropdown.current?.contains(e.target)) setCoursesOpen(false); };
    const escape = e => { if (e.key === 'Escape') { setCoursesOpen(false); setMenuOpen(false); } };
    document.addEventListener('pointerdown', close); document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', escape); };
  }, []);
  const choose = category => { onCategory(category); setCoursesOpen(false); setMenuOpen(false); };
  return <header className="site-header"><div className="container header-inner">
    <Logo />
    <form className="search-form" role="search" onSubmit={e => { e.preventDefault(); document.getElementById('courses').scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }}>
      <button type="submit" aria-label="Search courses"><img src={assets.header.imgInterfaceSearchMagnifyingGlass} alt="" /></button>
      <input type="search" aria-label="Search courses" placeholder="Search Your course" value={query} onChange={e => onSearch(e.target.value)} />
    </form>
    <button className="icon-button mobile-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? '×' : '☰'}</span></button>
    <div className={`navigation-wrap ${menuOpen ? 'is-open' : ''}`} id="main-navigation">
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <div className="course-navigation" ref={dropdown}>
          <button aria-expanded={coursesOpen} aria-controls="course-navigation" onClick={() => setCoursesOpen(!coursesOpen)}>Courses <img src={assets.header.imgArrowChevronDown} alt="" /></button>
          {coursesOpen && <div className="nav-dropdown" id="course-navigation"><button onClick={() => choose('All')}>All courses</button><button onClick={() => choose('IT & Software')}>IT &amp; Software</button><button onClick={() => choose('Design')}>Design</button><button onClick={() => choose('Marketing')}>Marketing</button></div>}
        </div>
        <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
      </nav>
      <div className="header-actions"><button className="button button-outline register-button" onClick={() => { onAuth('register'); setMenuOpen(false); }}>Register</button><button className="button button-dark" onClick={() => { onAuth('login'); setMenuOpen(false); }}><img src={assets.header.imgStartIcon} alt="" />Login</button></div>
    </div>
  </div></header>;
}
