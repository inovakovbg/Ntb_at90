import React, { useState, useEffect } from "react";
import styles from "./ProductInfoTimer.module.scss";
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import User from "../user/User";
import classNames from "classnames";
import { Paper } from "@mui/material";
import Countdown from "../countdown/Countdown";



export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {



  return (

    <div className={styles["product-info-timer"]}>
    
      <Typography className={styles.title}>ENDS IN</Typography>
   

 
      <Container container className={styles.timer}>
        <Countdown timeLeft={timeEnd} onTimeEnd={onTimeEnd}/>
      </Container>

    </div>

  ) 
}