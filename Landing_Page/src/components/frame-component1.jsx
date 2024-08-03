import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.descriptionWrapper, className].join(" ")}>
      <div className={styles.description}>
        <div className={styles.turantloIndias10MinuteParent}>
          <h1
            className={styles.turantloIndias10}
          >{`turantlo India's 10 minute `}</h1>
          <h1 className={styles.pharmacyApp}>Pharmacy App</h1>
          <div className={styles.comingSoonTo}>
            Coming Soon to Make Your Life Easier
          </div>
        </div>
        <button className={styles.frameParent}>
          <img className={styles.frameChild} alt="" src="/frame-3.svg" />
          <div className={styles.notification}>
            <div className={styles.notifyMe}>Notify Me</div>
          </div>
        </button>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
