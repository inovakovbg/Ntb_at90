import React, { useState, useEffect } from "react";
import styles from "./Collector.module.scss";
import Typography from '@mui/material/Typography';
import { Grid, Container } from "@mui/material";
import User from "../user/User";
import classNames from "classnames";



export default function Collector({ number, name, nftsCount, avatar, verified, type }) {



  return (

    <div>
      <Container >
        <Grid containerc className={styles.container} 

          
        >

          <Grid item xs={4} className={styles.num}   >
            <Typography align="center" className={styles.textNum}> {number}</Typography>
          </Grid>

          <Grid item xs={8} className={styles.gridUser}>

            <User size='53px' name="Ivan Nov" info="13200pt" verified="true" />


            {/* <Typography align="center" className={styles.textName}>{name}</Typography>
            <Typography align="center" className={styles.text}  >{description}</Typography> */}

          </Grid>
        </Grid>

      </Container>
    </div>

  )
}