import React, { useState, useEffect } from "react";
import styles from "./Collector.module.scss";
import Typography from '@mui/material/Typography';
import { Grid, Container } from "@mui/material";
import User from "../user/User";
import classNames from "classnames";



export default function Collector({ number, name, nftsCount, avatar, verified, type }) {



  return (

    
      <Container container className={styles.container} disableGutters>
        <Grid container className={styles.grid} 

          
        >

          <Grid item xs={3} className={styles[type+'Num']}  >
            <Typography >{number}</Typography>
           
          </Grid>

          <Grid item xs={9} className={styles[type+'User']} 
          
          
              >

            <User size='53px' name={name} info={nftsCount+' Items'} verified={verified} />


          </Grid>
        </Grid>

      </Container>
  

  )
}