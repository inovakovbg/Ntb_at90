import React, { useState, useEffect } from "react";
import styles from "./ProductInfoTimer.module.scss";
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import User from "../user/User";
import classNames from "classnames";
import { Paper, Grid } from "@mui/material";
import Countdown from "../countdown/Countdown";





export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {

  const [isCountdownVisible, setIsCountdownVisible] = useState(true);

  const handleCountdownComplete = () => {
    setIsCountdownVisible(false);
  };



  return (
    <>

      <div className={styles["product-info-timer"]}>

        {isCountdownVisible && timeEnd > 0 && (

          <Grid container>
            <Grid item xs={12} className= {styles.grid}>
              <Typography  variant="h4" className={styles.title}>ENDS IN</Typography>
            </Grid>
            <Container
              container
              className={timeEnd > 0 ? styles.active : styles.timer}
            >
              <Countdown
                timeLeft={timeEnd}
                onTimeEnd={onTimeEnd}
                CountComplete={handleCountdownComplete} />
            </Container>
          </Grid>
        )}


      </div>

    </>
  );
}