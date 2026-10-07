import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="contact-page">
        <h1>Contact Us</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;