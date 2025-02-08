import { contact } from '../../Portfolio'
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa' // Import icons
import './Contact.css'


const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>

      <div className="contact-buttons">
        <a href={`mailto:${contact.email}`} className="btn btn--outline contact-btn">
          <FaEnvelope className="contact-icon" /> Email Me
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--outline contact-btn">
          <FaLinkedin className="contact-icon" /> LinkedIn
        </a>
        <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="btn btn--outline contact-btn">
          <FaInstagram className="contact-icon" /> Instagram
        </a>
      </div>
    </section>
  )
}

export default Contact
