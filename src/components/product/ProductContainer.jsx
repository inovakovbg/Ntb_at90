import React from 'react';
import Grid from '@mui/material/Grid';
import styles from './ProductContainer.module.scss';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';
import ProductActions from './ProductActions';
import ProductImage from './ProductImage';



export default function ProductContainer({ name, owner, price, currency, likes, auction_end, details, source, bids }) 

{

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

    isLive: auction_end,
  };

  const activeBids = {
    text: details,
    bids: bids
  };




  return (
    <div className={styles['product-container']}>
      <Grid container spacing={2}  xs={12}>
        <Grid item xs={6}  >
          <ProductImage url={source.url} />
        </Grid>
        <Grid item xs={5}>

          <ProductInfo title={name} creator={owner} price={price} currency={currency} likes={likes}/>
          <ProductTabs {...activeBids} />
          <ProductActions isLive={true} currency={currency} buyAmount={price} bidAmount={1} />

        </Grid>
      </Grid>

    </div>
  );
};
