import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../data/siteContent';

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const slide = useMemo(() => heroSlides[active], [active]);

  const previousSlide = () => setActive((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setActive((prev) => (prev + 1) % heroSlides.length);

  const renderAction = (href: string, label: string, className: string) => {
    const isExternal = href.startsWith('http');
    const content = <>{label}<span aria-hidden="true">→</span></>;

    if (isExternal) {
      return <a href={href} className={className} target="_blank" rel="noreferrer">{content}</a>;
    }

    return <Link to={href} className={className}>{content}</Link>;
  };

  return (
    <section className="hero hero-refined" aria-label="LASIMRA featured updates">
      <div className="container">
        <div className="hero-showcase animate-card">
          <div className="hero-slide-media" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="hero-logo-watermark" aria-hidden="true">
            <img src="/lasimralogo.png" alt="" />
          </div>
          <div className="hero-swoosh hero-swoosh-one" />
          <div className="hero-swoosh hero-swoosh-two" />
          <div className="hero-swoosh hero-swoosh-three" />

          <button className="carousel-arrow hero-arrow left" aria-label="Previous slide" onClick={previousSlide}>‹</button>
          <button className="carousel-arrow hero-arrow right" aria-label="Next slide" onClick={nextSlide}>›</button>

          <div className="hero-content-panel">
            <span className="hero-eyebrow"><span />{slide.eyebrow}</span>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <div className="hero-actions">
              {renderAction(slide.primaryHref, slide.primary, 'btn btn-primary')}
              {renderAction(slide.secondaryHref, slide.secondary, 'btn btn-secondary')}
            </div>
          </div>

          <div className="carousel-dots hero-dots">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                className={`dot ${active === index ? 'active' : ''}`}
                onClick={() => setActive(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
