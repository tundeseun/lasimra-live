import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems, permitLinks } from '../data/siteContent';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 960) {
        setMobileOpen(false);
      }
    };

    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setDropdownOpen(false);
      }
    };

    window.addEventListener('resize', closeOnResize);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('resize', closeOnResize);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="topbar" role="banner">
      <div className="container nav-shell">
        <div className="nav-wrap">
          <Link to="/" className="brand" onClick={handleLinkClick} aria-label="LASIMRA Home">
            <img src="/lasimralogo.png" alt="LASIMRA" className="brand-logo" />
            <div className="brand-text">
              <span className="brand-name">LASIMRA</span>
              <span className="brand-subtitle">Lagos State Infrastructure Maintenance and Regulatory Agency</span>
            </div>
          </Link>

          <button 
            className={`menu-toggle ${mobileOpen ? 'active' : ''}`} 
            aria-label="Toggle navigation menu" 
            aria-expanded={mobileOpen} 
            onClick={() => setMobileOpen((v) => !v)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-panel ${mobileOpen ? 'open' : ''}`} role="navigation" aria-label="Main navigation">
            <nav className="nav">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="nav-dropdown" role="menuitem">
                <button 
                  type="button" 
                  className={`nav-link nav-link-button ${dropdownOpen ? 'active' : ''}`} 
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>Application Process</span>
                  <span className="nav-caret" aria-hidden="true">▾</span>
                </button>
                <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`} role="menu">
                  <div className="dropdown-label">Permit Services</div>
                  {permitLinks.map((item) => (
                    <Link 
                      key={item.href} 
                      to={item.href} 
                      className="dropdown-item" 
                      onClick={handleLinkClick}
                      role="menuitem"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            <a href="tel:08005274672" className="nav-phone" onClick={handleLinkClick} aria-label="Call LASIMRA">
              <span className="nav-phone-icon" aria-hidden="true">☎</span>
              <span>08000LASIMRA</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
