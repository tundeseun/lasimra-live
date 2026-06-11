import { Link } from 'react-router-dom';
import { contactInfo, navItems } from '../data/siteContent';

export default function Footer() {
  return (
    <footer className="footer footer-refined">
      <div className="container footer-compact">
        <div className="footer-identity">
          <img src="/lasimralogo.png" alt="LASIMRA logo" className="footer-logo" />
          <div>
            <strong>LASIMRA</strong>
            <p>Lagos State Infrastructure Maintenance and Regulatory Agency</p>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="footer-social" aria-label="Social media links">
          <a href="https://www.facebook.com/LASIMRAOfficial" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
          <a href="https://twitter.com/lasimra" target="_blank" rel="noreferrer" aria-label="X">𝕏</a>
          <a href="https://www.instagram.com/lasimraofficial" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
        </div>

        <div className="footer-contact-mini">
          <a href="tel:08005274672">{contactInfo.phonePrimary}</a>
          <a href={`mailto:${contactInfo.emailPrimary}`}>{contactInfo.emailPrimary}</a>
        </div>
      </div>
      <div className="container footer-bottom footer-bottom-compact">
        <p>© 2026 LASIMRA. All rights reserved.</p>
        <div>
          <Link to="/resources">Privacy Policy</Link>
          <span>|</span>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
