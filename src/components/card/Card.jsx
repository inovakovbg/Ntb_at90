import React, { useState, useEffect } from "react";
import styles from "./Card.module.scss";
import MUICard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/node/CardMedia/CardMedia';
import Avatar from '../avatar/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircleIcon from '@mui/icons-material/Circle';
import millify from "millify"
import Countdown from "/src/components/countdown/Countdown";


export default function Card({ name, likes = 0, mediaUrl, user = { avatar: { verified: true } }, price, currency, timeLeft=0 }) {
  
  // const [Live, setLive] = useState(true)

  //    useEffect(() => {
  //       if(timeLeft){
  //           setLive(true)
  //       }
  //    }, [])
  
  
  return (

    <MUICard className={styles.card} sx={{ maxWidth: 339, background: timeLeft && 'rgba(36,242,94,0.08)' }}>

      <CardHeader
        avatar={
          <Avatar url={user.avatar.url} size='33px' verified={user.avatar.verified} />

        }
      />
      <div className={styles.box}>
        <CardMedia className={styles.media}
          component="img"
          width="200"
          image={mediaUrl}
        // alt="Paella dish"
        />

        {timeLeft && <Countdown className={styles.countdown} timeLeft={timeLeft} />}

        {timeLeft && <Chip className={styles.badge}  icon={<CircleIcon />} label="LIVE" variant="filled" />}

   
      </div>

      <CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }} >

          <Typography className={styles.title}
          >{name}</Typography>
          <Typography className={styles.price}>{price + ' ' + currency}</Typography>

          <Chip className={styles.likes} color="secondary" icon={<FavoriteIcon />} label={millify(likes)} variant="outlined" />


        </CardActions>
      </CardContent>


    </MUICard>

  )
}