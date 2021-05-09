import React from "react";
import styles from "./notfound.module.css";
import ImageScarecrow from "../../assets/images/notfound.png";
import { Button } from "@material-ui/core";
function NotFound() {
  return (
    <div className={styles.main}>
      <div>
        <img
          className={styles.image}
          src={ImageScarecrow}
          alt="404 page"
          loading="lazy"
        />
      </div>
      <div className={styles.info}>
        <h2>I have bad news for you</h2>
        <p>
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <Button variant="outlined">Return to home page</Button>
      </div>
    </div>
  );
}
export default NotFound;
