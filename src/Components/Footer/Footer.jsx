import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

const footerLinks = [
  ["Audio Description", "Investor Relations", "Legal Notices"],
  ["Help Centre", "Jobs", "Cookie Preferences"],
  ["Gift Cards", "Terms of Use", "Corporate Information"],
  ["Media Centre", "Privacy", "Contact Us"],
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* Social buttons are grouped first, matching the reference design. */}
        <div className={styles.socialLinks} aria-label="Social media links">
          <a href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
          <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
          <a href="#youtube" aria-label="YouTube"><FaYoutube /></a>
        </div>

        {/* Each nested array becomes one vertical column of footer links. */}
        <div className={styles.linkGrid}>
          {footerLinks.map((column, columnIndex) => (
            <div className={styles.linkColumn} key={columnIndex}>
              {column.map((link) => (
                <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`} key={link}>{link}</a>
              ))}
            </div>
          ))}
        </div>

        <p className={styles.copyright}>© 1997–2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
