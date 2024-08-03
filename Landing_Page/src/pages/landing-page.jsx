import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import styles from "./landing-page.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <FrameComponent />
      <main className={styles.content}>
        <section className={styles.illustration}>
          <img
            className={styles.backgroundImageIcon}
            alt=""
            src="/background-image@2x.png"
          />
          <img
            className={styles.artboard13}
            loading="lazy"
            alt=""
            src="/artboard-1-3@2x.png"
          />
        </section>
        <img
          className={styles.hand1Icon}
          loading="lazy"
          alt=""
          src="/hand-1@2x.png"
        />
        <img className={styles.contentChild} alt="" src="/vector-1.svg" />
        <img
          className={styles.heartFlowting1}
          loading="lazy"
          alt=""
          src="/heart-flowting-1@2x.png"
        />
      </main>
      <FrameComponent1 />
      <FrameComponent2 />
    </div>
  );
};

export default LandingPage;
