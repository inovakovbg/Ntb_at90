import React, { useState, useEffect } from "react";
import styles from "./Step.module.scss";
import Typography from '@mui/material/Typography';
import {Grid,Container} from "@mui/material";



export default function Step ({number,title,description}) {



  return (

    <div>
      <Container className={styles.container}>
        <Grid container      
            rowSpacing={1} 
            className={styles.grid}
        >

          <Grid item xs={4}  className={styles.num}   >
          <Typography align="center" className={styles.textNum}> {number}</Typography>
          </Grid>

          <Grid item xs={8} className={styles.gridtext}>
            <Typography align="center" className={styles.textName}>{title}</Typography>
            <Typography align="center" className={styles.text}  >{description}</Typography>

          </Grid>
        </Grid>
   
     </Container>
    </div>

  )
}