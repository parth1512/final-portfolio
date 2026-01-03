import TextReveal from './TextReveal';
import FadeInText from './FadeInText';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-header">
          <TextReveal className="contact-title" justify="start">LET'S WORK TOGETHER</TextReveal>
          <FadeInText className="contact-subtitle" delay={0.3}>
            Have a project in mind? Want to collaborate or just say hi?
            <br /> I'm always open to new ideas and opportunities.
          </FadeInText>
        </div>

        <div className="contact-links-container">
          <a href="mailto:parthjadhav1512@gmail.com" className="contact-link-item">
            <span className="link-label">Email</span>
            <span className="link-arrow">→</span>
          </a>
          <a href="https://www.linkedin.com/in/parthjadhav2004/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <span className="link-label">LinkedIn</span>
            <span className="link-arrow">→</span>
          </a>
          <a href="https://github.com/parth1512" target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <span className="link-label">GitHub</span>
            <span className="link-arrow">→</span>
          </a>
          <a href="https://drive.google.com/file/d/1CsY4vZPukD9tH4Gqdva-f_83NrQRnOpE/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <span className="link-label">Resume</span>
            <span className="link-arrow">→</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ContactMe;
