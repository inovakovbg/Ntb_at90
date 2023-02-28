import React from 'react';
import { Grid, Button, Container } from '@mui/material';
import styles from './ProductContainer.module.scss';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';
import ProductActions from './ProductActions';
import ProductImage from './ProductImage';


export default function ProductContainer({ name, owner, price, currency, likes, auction_end, details, source, bids }) {

  const product = {
    title: name,
    creator: {
      name: owner.username,
      avatar: owner.avatar,
      verified: owner.verified,
    },
    price: price,
    currency: currency,
    likes: likes,
    onTimeEnd: () => { console.log('Auction time is up!'); },
    timeEnd: auction_end,

    isLive: true
  };

  const activeBids = {
    text: details,
    bids: bids
  };




  return (
    <div className={styles['product-container']}>
      <Grid container spacing={2}  >
        <Grid item xs={6}  >
          <ProductImage url={source.url} />
        </Grid>
        <Grid item xs={5}>

          <ProductInfo {...product} />
          <ProductTabs {...activeBids} />
          <ProductActions isLive={true} currency='ETH' buyAmount={3} bidAmount={1} />

        </Grid>
      </Grid>

    </div>
  );
};
