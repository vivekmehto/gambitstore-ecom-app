import "./style.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-head">
        <h4>
          Made by <span className="logo-img">Vivek Mehto</span>
        </h4>
      </div>
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/vivek-mehto-8a22841ba/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/vivekmehto/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/vivekmehto" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/vivekmehto_" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div className="footer-head">
        <h4>
          ©️ <span className="logo-img">♞</span>GamBit Store | 2022
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
