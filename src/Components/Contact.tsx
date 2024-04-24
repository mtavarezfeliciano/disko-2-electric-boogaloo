import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="Contact" className="contact-section">
      <div className="contact-title">
        <h2>Let's Connect!</h2>
      </div>
      <div className="contact-body">
        <p>
          For bookings, collaborations, or any questions, I'm just an email
          away. Click the icon below to send me a message, and I'll get back to
          you as soon as possible. Looking forward to hearing from you!
        </p>
      </div>
      <a href="mailto: example@email.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </section>
  );
};

export default Contact;
