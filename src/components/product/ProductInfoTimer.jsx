import React, { useState, useEffect } from "react";
import styles from "./ProductInfoTimer.module.scss";
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import User from "../user/User";
import classNames from "classnames";
import { Paper } from "@mui/material";
import Countdown from "../countdown/Countdown";




export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {

  console.log(timeEnd);
  const isAuctionActive = Date.now() < new Date(timeEnd);
  
  // const [isCountdownVisible, setIsCountdownVisible] = useState(true);

  // const onTimeEnd = () => {
  //   setIsCountdownVisible(false);
  // };



  return (
  
    <div className={styles["product-info-timer"]}>
      {isAuctionActive && (
         <>
      <Typography className={styles.title}>ENDS IN</Typography>
    
       
          <div className={isAuctionActive ? styles.active : styles.timer}>
          <Countdown timeLeft={new Date(timeEnd)} onTimeEnd={onTimeEnd} />
          </div>
        </>
      )}
    </div>
  );
}