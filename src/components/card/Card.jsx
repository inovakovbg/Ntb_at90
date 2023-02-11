import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '../avatar/Avatar';


export default function MyCard(){
    return(

<Card sx={{ maxWidth: 339 }}>

<CardHeader
        avatar={
          <Avatar url="/images/avatar.png" size='33px' verified='true'/>
       
        }
        />
</Card>

    )
}