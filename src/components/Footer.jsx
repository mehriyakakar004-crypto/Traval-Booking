import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>✈️Sky Trip </h2>

          <p>
            Explore the world with comfort, style, and unforgettable memories.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact Information</h3>

          <p>
            <strong>Email:</strong> skytrip@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> +93 744464510
          </p>

          <p>
            <strong>Address:</strong> Kabul, Afghanistan
          </p>
        </div>

        <div className="footer-support">
          <h3>Support</h3>

          <p>
            <strong>Working Hours:</strong> 9:00 AM - 6:00 PM
          </p>

          <p>
            <strong>Available:</strong> Saturday - Thursday
          </p>

          <p>
            <strong>Service:</strong> Travel booking and destination support
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Sky Trip. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;