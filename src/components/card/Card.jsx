import React from 'react';
import styles from "./Card.module.scss";
import MUICard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/node/CardMedia/CardMedia';
import Avatar from '../avatar/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import  Chip  from '@mui/material/Chip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import millify from "millify"


export default function Card({name, likes='0', mediaUrl, user={avatar:{verified:true}} , price, currency}) {
  return (

    <MUICard className={styles.card} sx={{ maxWidth: 339 }}>

      <CardHeader
        avatar={
          <Avatar url={user.avatar.url} size='33px' verified={user.avatar.verified} />

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
          >{price+' '+currency}</Typography>

          <Chip className={styles.likes} color="secondary" icon={<FavoriteIcon  />} label={millify(likes)} variant="outlined" />


        </CardActions>
      </CardContent>


    </MUICard>

  )
}