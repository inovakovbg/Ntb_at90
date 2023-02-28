import React from 'react';
import { Grid, Button } from '@mui/material';
import styles from './ProductActions.module.scss';


export default function ProductActions({ isLive, currency, buyAmount, bidAmount, onBuy, onBid }) {
  return (
    <div className={styles['product-actions']}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Button

            variant="contained"


            disabled={!isLive}
            onClick={onBuy}
            fullWidth
            className={styles.button}
          >
            Buy for {buyAmount} {currency}
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button
            variant="outlined"

            disabled={!isLive}
            onClick={onBid}
            fullWidth
            className={styles.button}
            color="success"
            style={{ color: '#24F25E'}}>
            Place Bid for {bidAmount} {currency}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
