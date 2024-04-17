import growing from "../../assets/growing.jpg";
import idea from "../../assets/idea.jpg";
import success from "../../assets/success.jpg";
import "./landing.css";
import {
  Parallax,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";

export default function Landing() {
  return (
    <div className="landing">
      <ParallaxProvider>
        <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
          <ParallaxBannerLayer image={growing} speed={10} />
          <ParallaxBannerLayer speed={-20} scale={[1, 1.5]} opacity={[1, 0.5]}>
            <div className="banner-heading-div">
              <h1 className="banner-heading dancing-script-Heading">Go fund</h1>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
        <div className="info-sec">
          <Parallax translateX={[-10, 5, "easeInOut"]}>
            <img src={idea} width="500px" />
          </Parallax>
          <Parallax translateX={[10, -5, "easeInOut"]}>
            <div className="info if1-bg">
              <p className="info-text ">
                Empower the future of innovation with our blockchain-driven
                crowdfunding platform, where ideas flourish and communities
                thrive
              </p>
            </div>
          </Parallax>
        </div>

        <div className="info-sec">
          <Parallax translateX={[-10, 10, "easeInOut"]}>
            <div className="info">
              <p className="info-text ">
                Your launchpad for support: where blockchain meets crowdfunding
                to fuel dreams and drive success
              </p>
            </div>
          </Parallax>
          <Parallax translateX={[10, -5, "easeInOut"]}>
            <div className="second-img-div">
              <img src={success} height={350} />
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
