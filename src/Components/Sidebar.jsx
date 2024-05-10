import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={"/public/images/SkMustakh.jpeg"}
            alt="Richard hanrick"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Mustakh Shaikh
          </h1>
          <p className="title">Software Developer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <hr className="separator2" />

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <FaDownload />
            </div>
            <div className="contact-info">
              <p className="contact-title">Resume</p>
              <a href="/public/images/SkMustakh_Resume.pdf" download className="contact-link">
                SkMustakh_Resume
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaGithub />
            </div>
            <div className="contact-info">
              <p className="contact-title">GitHub</p>
              <a href="https://github.com/skmushtakh007" className="contact-link">
                skmushtakh007
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaLinkedin />
            </div>
            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>
              <a href="https://www.linkedin.com/in/mustakh007/" className="contact-link">
                mustakh007
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:shaikhmushtaq054@gmail.com" className="contact-link">
                shaikhmushtaq054@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+91 9175584787" className="contact-link">
                +91 9175584787
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Dharma Raj Chowk, Akurdi, Pune</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar