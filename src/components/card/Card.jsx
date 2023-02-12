import React from 'react';
import { styled } from '@mui/material/styles';
import styles from "./Card.module.scss";
import MUICard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/node/CardMedia/CardMedia';
import Avatar from '../avatar/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

export default function Card({ name, mediaUrl, price }) {
  return (

    <MUICard className={styles.card} sx={{ maxWidth: 339 }}>

      <CardHeader
        avatar={
          <Avatar url="/images/avatar.png" size='33px' verified='true' />

        }
      />

      <CardMedia className={styles.media}
        component="img"
        width="200"
        image={mediaUrl}
      // alt="Paella dish"
      />

      <CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }} >

          <Typography className={styles.title}
          >{name}</Typography>
          <Typography className={styles.price}
          >{price}</Typography>
  
 
        </CardActions>
      </CardContent>


    </MUICard>

  )
}