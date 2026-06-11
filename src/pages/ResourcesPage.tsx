import PageHero from '../components/PageHero';
import { resourcesContent } from '../data/siteContent';

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="LASIMRA and NCC Law Excerpts"
        text={resourcesContent.intro}
      />

      <section className="page-section">
        <div className="container narrow">
          <div className="content-card stack-gap">
            <h3>Our Functions Include</h3>
            <ol className="styled-list">
              {resourcesContent.functions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>

            <h3>LASIMRA Has the Power To</h3>
            <ol className="styled-list">
              {resourcesContent.powers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>

            <h3>Nigerian Communications Act Excerpt</h3>
            <p>{resourcesContent.lawExcerpt}</p>
            <blockquote className="quote-block">
              Section 135: Licensees under this Act may require approvals of the State Government,
              Local Government or other relevant authority for installation, placing, laying or
              maintenance of any network facilities on, through, under or across any land and it
              shall be the responsibility of such licensees to obtain such approvals.
            </blockquote>

            <h3>Documentation</h3>
            <div className="docs-grid">
              {resourcesContent.docs.map((doc) => (
                <div className="doc-card" key={doc.title}>
                  <h4>{doc.title}</h4>
                  <p>{doc.description}</p>
                  <button type="button" className="btn btn-secondary">{doc.action}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
