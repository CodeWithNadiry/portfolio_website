import Image from "next/image";
import Link from "next/link";
import classes from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className={`container ${classes.contact}`}>
      <div className={classes.content}>
      <div className={classes.image}>
        <Image src="/contact.jpeg" alt="Contact image" fill priority />
      </div>

        <div className={classes.links}>
          <span className={classes.label}>GET IN TOUCH</span>
          <h2 className={classes.heading}>Contact.</h2>

          <div className={classes.actions}>
            <Link
              href="mailto:your@email.com"
              className={classes.link}
              aria-label="Send Email"
            >
              <span>Email</span>
              <FaEnvelope />
            </Link>

            <Link
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
              aria-label="View LinkedIn profile"
            >
              <span>LinkedIn</span>
              <FaLinkedin />
            </Link>

            <Link
              href="https://github.com/CodeWithNadiry"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
              aria-label="View GitHub profile"
            >
              <span>GitHub</span>
              <FaGithub />
            </Link>
          </div>
        </div>
          </div>

        {/* BOTTOM */}
        <div className={classes.footer}>
          <p className={classes.thanks}>Thanks for scrolling.</p>

          <Link
            href="/resume.pdf"
            target="_blank"
            className={`${classes.link} ${classes.resume}`}
          >
            <span>Resume</span>
            <span className={classes.arrow}>↗</span>
          </Link>
        </div>

        {/* HR at very end */}
        <hr className={classes.divider} />
    </section>
  );
};

export default Contact;
