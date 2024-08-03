import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.scooterWrapper, className].join(" ")}>
      <div className={styles.scooter}>
        <img
          className={styles.scooterAnimationIcon}
          alt=""
          src="/scooter-animation@2x.png"
        />
        <div className={styles.about}>
          <div className={styles.titleParent}>
            <div className={styles.title}>
              <h1 className={styles.about1}>{`About `}</h1>
              <h1 className={styles.turantlo}>Turantlo</h1>
            </div>
            <div className={styles.description}>
              <div className={styles.theAppThat}>
                The app that revolutionizes the way you receive healthcare
                products. We understand that timely access to health essentials
                can make a significant difference in your well-being. That's why
                we are committed to delivering your healthcare products in just
                10 minutes, right to your doorstep.
              </div>
              <div className={styles.withOurCuttingEdge}>
                With our cutting-edge delivery system, you no longer have to
                wait hours for your essential health products. HealthQuick
                ensures that you get what you need in just 10 minutes, whether
                it's prescription medications, over-the-counter drugs, or health
                supplements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
