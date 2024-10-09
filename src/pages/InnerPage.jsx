<<<<<<< HEAD
import Sidebar from "../components/Sidebar";
=======
import KeyFeature from "../components/KeyFeature";
import Sidebar from "../components/Sidebar";
import TradeDigi from "../components/TradeDigi";
>>>>>>> aasik
import "./Innerpage.css";
const Innerpage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 class="hero-section__title">
              Trade Confidently with Quantum Code Ai
            </h1>
            <div class="hero-section__social">
              <div class="hero-section__social-item">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </div>
              <div class="hero-section__social-item">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
              </div>
              <div class="hero-section__social-item">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </div>
              <div class="hero-section__social-item">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </div>
              <div class="hero-section__social-item">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <img
                className="img-fluid"
<<<<<<< HEAD
                src="img/Quantum_Ai_banner.jpg"
                alt=""
              />
            </div>
=======
                src="/img/Quantum_Ai_banner.jpeg"
                alt=""
              />
            </div>
            <KeyFeature />
            <TradeDigi />
>>>>>>> aasik
          </div>

          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};
export default Innerpage;
