import React from 'react';
import Grid from '@mui/material/Grid';
import styles from './ProductContainer.module.scss';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';
import ProductActions from './ProductActions';
import ProductImage from './ProductImage';



export default function ProductContainer({ name, owner, price, currency, likes, auction_end, details, source, bids }) 

{

  function onBuy() {
    console.log('You Buy It');
  }

  function onBid() {
    console.log('You Bid It');
  }
  

  const isAuctionActive = Date.now() < new Date(auction_end);
 



  return (
    <div className={styles['product-container']}>
      <Grid container direction="row" justifyContent="space-between" spacing={2}>
        <Grid item xs={6}  >
          <ProductImage url={source.url} />
        </Grid>
        <Grid item xs={5}>

          <ProductInfo title={name} creator={owner} price={price} currency={currency} likes={likes} timeEnd={auction_end} isLive={isAuctionActive}/>
          <ProductTabs text={details} bids={bids} />
          <ProductActions isLive={isAuctionActive} currency={currency} buyAmount={price} onBuy={onBuy} onBid={onBid} bidAmount={1} />

        </Grid>
      </Grid>

    </div>
  );
};
