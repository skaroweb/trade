import "./index.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <img
                  src="https://www.skarosoft.com/casino2/assets/img/logo.png"
                  alt=""
                />
              </a>
              <p>
                PlayBestOntario strives to bring visitors honest and accurate
                reviews on casinos &amp; sportsbooks. We provide extended casino
                reviews, casino game guides, slots, payment methods and much
                more about gambling in Ontario.
              </p>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="fa fa-chevron-right"></i>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right"></i>
                  <a href="about.html">About us</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right"></i>
                  <a href="mailto:someone@example.com">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Legal</h4>
              <ul>
                <li>
                  <i className="fa fa-chevron-right"></i>
                  <a href="terms-and-conditions.html">Terms of service</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right"></i>
                  <a href="cookie-policy.html">Cookie Policy</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right"></i>
                  <a href="privacy-policy.html">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Social</h4>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>Casinos</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;
