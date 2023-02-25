import React, { useState, useEffect } from "react";
import styles from "./ProductInfoTimer.module.scss";
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import User from "../user/User";
import classNames from "classnames";
import { Paper } from "@mui/material";
import Countdown from "../countdown/Countdown";




export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  const [isCountdownVisible, setIsCountdownVisible] = useState(true);

  const handleCountdownComplete = () => {
    setIsCountdownVisible(false);
  };

  return (
    <div className={styles["product-info-timer"]}>
      {timeEnd && (
         <>
      <Typography className={styles.title}>ENDS IN</Typography>

      
       
          <div className={isCountdownVisible ? styles.active : styles.timer}>
            <Countdown
              timeLeft={timeEnd}
              // onTimeEnd={handleCountdownComplete}
              onTimeEnd={onTimeEnd}
            />
          </div>
        </>
      )}
    </div>
  );
}