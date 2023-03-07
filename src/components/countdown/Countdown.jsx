import React from "react";
import MyCountdown from "react-countdown";
import styles from "./Countdown.module.scss";

export default function Countdown({ timeLeft, onTimeEnd }) {

   const difference = new Date(timeLeft) - new Date();

   return (

      <div className={styles.countdown}>
         <MyCountdown date={timeLeft} onComplete={onTimeEnd} />
      </div>
   )

}