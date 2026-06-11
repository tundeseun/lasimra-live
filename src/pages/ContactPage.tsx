import PageHero from '../components/PageHero';
import { contactInfo } from '../data/siteContent';

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Send Us a Message"
        text="Have questions about TIRS or need assistance? We're here to help."
      />

      <section className="page-section">
        <div className="container two-col">
          <div className="content-card">
            <form className="contact-form">
              <input type="text" placeholder="Full Name *" />
              <input type="email" placeholder="Email Address *" />
              <select defaultValue="">
                <option value="" disabled>Subject *</option>
                <option>TIRS Launch</option>
                <option>Event</option>
                <option>Permit Inquiry</option>
                <option>General Inquiry</option>
                <option>Feedback</option>
              </select>
              <textarea rows={6} placeholder="Message *" />
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>

          <aside className="content-card stack-gap">
            <h3>Office Hours</h3>
            <p>{contactInfo.officeHours}</p>
            <h3>Phone Number</h3>
            <p>{contactInfo.phonePrimary}</p>
            <p>{contactInfo.phoneSecondary}</p>
            <h3>Head Office</h3>
            <p>{contactInfo.address}</p>
            <h3>Email</h3>
            <p>{contactInfo.emailPrimary}</p>
            <p>{contactInfo.emailSecondary}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
