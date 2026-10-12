import { Logo } from './Header';

export default function Footer({ onInfo, onCategory }) {
  return <footer className="site-footer" id="contact"><div className="container"><div className="footer-columns">
    <div className="footer-brand"><Logo footer /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
    <div className="footer-links"><h2>GET HELP</h2><a href="#contact">Contact Us</a><a href="#blog">Latest Blog</a><button onClick={() => onInfo('faq')}>FAQ</button><button onClick={() => onInfo('privacy')}>Privacy</button></div>
    <div className="footer-links"><h2>Categories</h2>{['Art & Design', 'Business', 'Art & Design', 'Art & Design'].map((name, i) => <button key={i} onClick={() => onCategory(name === 'Business' ? name : 'Design')}>{name}</button>)}</div>
    <div className="footer-contact"><h2>CONTACT US</h2><p>Address: 2321 New Design Str, Lorem Ipsum10 Hudson<br />Yards, USA</p><p>Phone: + (80) 1234 567890<br />Mail: osmanit@gmail.com</p><div className="social-links" aria-label="Social platforms from the design"><span aria-label="Facebook">f</span><span aria-label="Pinterest">p</span><span aria-label="X">𝕏</span><span aria-label="Instagram">◎</span><span aria-label="YouTube">▣</span></div></div>
  </div><p className="copyright">Copyright © 2024 Osman IT | Design &amp; Developed by Arif Hasan</p></div><a className="back-to-top" href="#home" aria-label="Back to top">↑</a></footer>;
}
