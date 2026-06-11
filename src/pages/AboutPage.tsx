import PageHero from '../components/PageHero';
import { aboutContent, chairmanMessage } from '../data/siteContent';

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About LASIMRA"
        title="A Technology-Driven Regulatory Agency"
        text={aboutContent.whoWeAre}
      />

      <section className="page-section">
        <div className="container narrow">
          <div className="content-card stack-gap">
            <h3>Our Mission</h3>
            <p>{aboutContent.mission}</p>

            <h3>Who We Are</h3>
            <p>{aboutContent.whoWeAre}</p>
            <p>{aboutContent.mandate}</p>

            <h3>Our Vision</h3>
            <p>{aboutContent.vision}</p>

            <h3>Core Functions</h3>
            <ul className="styled-list">
              {aboutContent.coreFunctions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>Our Team</h3>
            <p>{aboutContent.team}</p>

            <h3>Quality Policy</h3>
            <ul className="styled-list">
              {aboutContent.qualityPolicy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>Quick Facts</h3>
            <div className="facts-grid">
              {aboutContent.facts.map((fact) => (
                <div className="fact-card" key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>

            <h3>Leadership</h3>
            <p><strong>{chairmanMessage.name}</strong><br />{chairmanMessage.role}</p>
            <p>
              Under the leadership of Elegushi Oyekanmi, LASIMRA has implemented numerous initiatives
              to modernize infrastructure regulation in Lagos State.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
