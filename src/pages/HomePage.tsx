import HeroCarousel from '../components/HeroCarousel';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import AnnouncementCard from '../components/AnnouncementCard';
import QuickLinkCard from '../components/QuickLinkCard';
import { announcements, chairmanMessage, quickAccess, services } from '../data/siteContent';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="notice-band">
        <div className="container notice-card animate-card">
          <span className="notice-pill">Public Notice</span>
          <p>
            This is to notify all stakeholders that our office has relocated from 2, Yusuf Close,
            Agidingbi, Ikeja to 37 Emina Crescent, off Allen Avenue (by Oshopey Plaza), Ikeja.
            Kindly update your records and visit us at our new address for all official engagements.
          </p>
        </div>
      </section>

      <section className="section-space section-about-refined">
        <div className="container about-card about-card-refined animate-card">
          <div className="about-image-card gm-image-card">
            <img src="/gm.jpg" alt={`${chairmanMessage.name}, General Manager of LASIMRA`} className="gm-image" />
            <div className="gm-badge">
              <span className="gm-badge-label">Leadership</span>
              <strong>{chairmanMessage.name}</strong>
              <small>{chairmanMessage.role}</small>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">General Manager's Message</span>
            <h2>{chairmanMessage.heading}</h2>
            {chairmanMessage.body.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="leader-meta">
              <strong>{chairmanMessage.name}</strong>
              <span>{chairmanMessage.role}</span>
            </div>
            <a href="/about" className="btn btn-light">
              Read More About Us
            </a>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionHeader
            label="Our Services"
            title="Comprehensive Regulatory Services"
            text="Professional permit and infrastructure regulatory services designed for transparency, efficiency, and better stakeholder experience."
          />
          <div className="services-grid">
            {services.map((item, index) => (
              <ServiceCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-tint">
        <div className="container">
          <SectionHeader
            label="Latest Announcements"
            title="News, Notices and Public Updates"
            text="Stay updated with the latest notices, initiatives, and public information from LASIMRA."
          />
          <div className="announcements-grid">
            {announcements.map((item, index) => (
              <AnnouncementCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionHeader
            label="Quick Access"
            title="Find What You Need Quickly and Easily"
            text="Direct access to applications, forms, media updates, and support channels."
          />
          <div className="quick-grid">
            {quickAccess.map((item, index) => (
              <QuickLinkCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
