import PageHero from '../components/PageHero';
import { mediaItems } from '../data/siteContent';

export default function MediaCentrePage() {
  return (
    <>
      <PageHero
        label="Media Centre"
        title="In The News"
        text="Latest media coverage, LASIMRA press, and infrastructure updates."
      />

      <section className="page-section">
        <div className="container narrow">
          <div className="news-grid single-column">
            {mediaItems.map((item) => (
              <article className="news-card" key={item.title}>
                <div className="news-image" />
                <div className="news-content">
                  <span className="news-meta">{item.meta}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button type="button" className="btn btn-light">Read Full Story</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
