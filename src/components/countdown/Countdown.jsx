import React from "react";
import MyCountdown from "react-countdown";
import styles from "./Countdown.module.scss";

export default function Countdown({timeLeft,onTimeEnd,CountComplete}){
  
return(

   <div className={styles.countdown}>
      <MyCountdown date={Date.now() + timeLeft} onComplete={CountComplete} onTimeEnd={onTimeEnd}/>
   </div>
)
   
}