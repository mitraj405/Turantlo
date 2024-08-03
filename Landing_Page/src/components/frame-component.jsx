import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={[styles.newLogo1Parent, className].join(" ")}>
      <img
        className={styles.newLogo1}
        loading="lazy"
        alt=""
        src="/new-logo-1@2x.png"
      />
      <div className={styles.navigation}>
        <div className={styles.links}>
          <a className={styles.home}>Home</a>
          <a className={styles.contactUs}>{`Contact Us `}</a>
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
