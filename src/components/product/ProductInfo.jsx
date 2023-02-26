
import React from 'react';

import ProductInfoTitle from './ProductInfoTitle';
import ProductInfoPrice from './ProductInfoPrice';
import ProductInfoLikes from './ProductInfoLikes';
import ProductInfoCreator from './ProductInfoCreator';
import ProductInfoTimer from './ProductInfoTimer';
import ProductInfoStatus from './ProductInfoStatus';
import styles from './ProductInfo.module.scss';
import { Stack, Grid } from '@mui/material';

export default function ProductInfo({ title, creator, price, currency, likes, onTimeEnd, timeEnd, isLive }) {
  const { name, avatar, verified } = creator;

  return (
    <div className={styles['product-info']}>
      <ProductInfoTitle text={title} />
      
      <div className={styles["title-line"]}></div>

      <Stack direction="row" spacing={2} className={styles.bigstack}>

        <Stack direction="row" spacing={2} className={styles.stats}>
          <ProductInfoPrice amount={price} currency={currency} />
          {isLive && <ProductInfoStatus />}
        </Stack>
        <ProductInfoLikes amount={likes} />

      
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={7}>
          <ProductInfoCreator name={name} avatar={avatar} verified={verified} />
        </Grid>
        <Grid item xs={5}>
          <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd} />
        </Grid>
      </Grid>


    </div>
  );
}




