import Example from "../src/components/example/Example";
// import Logo from "../src/components/logo/Logo";
import Header from "../src/components/header/Header";
import Avatar from "../src/components/avatar/Avatar";
import User from "../src/components/user/User";
import Card from "../src/components/card/Card";
import React from "react";
import { avatarClasses } from "@mui/material";
import Trending from "../src/components/trending/Trending";
import Countdown from "../src/components/countdown/Countdown";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import Step from "../src/components/how/Step";
import How from "../src/components/how/How";
import Featured from "../src/components/featured/Featured";
import Collector from "../src/components/collectors/Collector";
import CollectorsColumn from "../src/components/collectors/CollectorColumn";
import TopCollectors from "../src/components/collectors/TopCollectors";
import { useState, useEffect } from "react";


import dataUsers from "../data/users.json";
import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataNfts from "../data/nfts.json";

import ProductImage from "../src/components/product/ProductImage";
import ProductInfoTitle from "../src/components/product/ProductInfoTitle";
import ProductInfoPrice from "../src/components/product/ProductInfoPrice";
import ProductInfoStatus from "../src/components/product/ProductInfoStatus";
import ProductInfoLikes from "../src/components/product/ProductInfoLikes";
import ProductInfoCreator from "../src/components/product/ProductInfoCreator";
import ProductInfoTimer from "../src/components/product/ProductInfoTimer";




export default function Index() {

   const [collectors, setCollectors] = useState([]);
   const [FeatureCards, setFeauterdCards] = useState([]);
   const [TrendingCards, setTrending] = useState([]);
   const [AuctionsItems, setAuctions] = useState([]);



   useEffect(() => {
      setCollectors(dataUsers);
      setFeauterdCards(dataFeatured);
      setTrending(dataTrending);
      setAuctions(dataNfts);
   }, []);


   return (

      <div>


         {/* <Example /> */}

         {/* <Header></Header> */}

         {/* <Avatar url="/images/avatar.png" size='180px' verified=''/> */}

         {/* <User size='50px' name="Ivan Nov" info="13200pt" verified="true" /> */}

         {/* 
  <Card name="Clock" likes={560}  mediaUrl="/images/nft.jpg" 
   user={{avatar:{url:"/images/avatar.png",verified:true}}} price="1300" currency='ETH' timeLeft={10000}/> 
  <br></br> */}

         {/* <Countdown/> */}


         {/* <Auctions cards={[
  {
    "name":"Ivy",
    "user":{"avatar":{"url":"images/avatar.png"},"verified":true },
    "mediaUrl":"images/nft.jpg",
    "price":1,
    "currency":"ETH",
    "timeLeft":10000
 },
 {
    "name":"Judie",
    "user":{
       "avatar":{
          "url":"images/avatar.png"
       },
       "verified":true
    },
    "mediaUrl":"images/nft.jpg",
    "price":2.3,
    "currency":"ETH",
    "timeLeft":20000
 },
 {
    "name":"Juniper",
    "user":{
       "avatar":{
          "url":"images/avatar.png"
       },
       "verified":true
    },
    "mediaUrl":"images/nft.jpg",
    "price":5,
    "currency":"ETH",
    "timeLeft":10000
 },
 {
    "name":"Maple",
    "user":{
       "avatar":{
          "url":"images/avatar.png"
       },
       "verified":true
    },
    "mediaUrl":"images/nft.jpg",
    "price":10,
    "currency":"ETH",
    "timeLeft":10000
 }

  ]}/> */}



         {/* < Step number={1} title="DIGITAL CURRENCY" description='You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange'/> */}
         <br></br> <br></br>

         {/* 
         <How title='HOW IT WORKS'
       description="Discover, collect, and sell extraordinary NFTs
       on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM."
       items={[
  {
    "title":"DIGITAL CURRENCY",
    "description":'You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange',
   },
   {
      "title":'CRYPTO WALLET',
      "description":'A crypto wallet, such as Metamask, stores your ETH and processes transactions on the Ethereum blockchain.',
     },
     {
       "title":'BUM.',
      "description":"Let'connect your wallet to BUM,edit your profile,and begin interacting in the space.",
     }
  ]}/>  */}

         {/* 
         <Collector number={1} type='lighter' /> */}

         {/* <Featured items={[
            {
               image:
                  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
               title: "Breakfast",
               rows: 2,
               cols: 3,
               href: "/about",
            },
            {
               image:
                  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
               title: "Burger",
               href: "/about",
            },
            {
               image:
                  "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
               title: "Camera",
               href: "/about",
            },
            {
               image:
                  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500",
               title: "Coffee",
               href: "/about",
            },
            {
               image:
                  "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500",
               title: "Hats",
               href: "/about",
            },
            {
               image:
                  "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500",
               title: "Honey",
               href: "/about",
            },
            {
               image:
                  "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500",
               title: "Basketball",
               href: "/about",
            },


         ]} /> */}


         {/* 
      <CollectorsColumn
         items={[
            {
               "name": "terika77",
               "nftsCount": 134,
               "avatar": "images/avatar.png",
               "verified": true

            },
            {
               "name": "brendan_1",
               "nftsCount": 98,
               "avatar": "images/avatar.png",
               "verified": false
            },
            {
               "name": "damiann",
               "nftsCount": 97,
               "avatar": "images/avatar.png",
               "verified": false
            },

         ]} />  */}

         {/* <CollectorsColumn items={collectors}/> */}


         {/* <TopCollectors
         collectors={[
            {
               "name": "terika77",
               "nftsCount": 134,
               "avatar": "images/avatar.png",
               "verified": true
             

            },
            {
               "name": "brendan_1",
               "nftsCount": 98,
               "avatar": "images/avatar.png",
               "verified": false
            },
            {
               "name": "damiann",
               "nftsCount": 97,
               "avatar": "images/avatar.png",
               "verified": false
            },
            {
               "name": "terika78",
               "nftsCount": 134,
               "avatar": "images/avatar.png",
               "verified": true

            },
            {
               "name": "brendan_1",
               "nftsCount": 98,
               "avatar": "images/avatar.png",
               "verified": false
            },
            {
               "name": "damiann",
               "nftsCount": 97,
               "avatar": "images/avatar.png",
               "verified": false
            },
            {
               "name": "terika77",
               "nftsCount": 134,
               "avatar": "images/avatar.png",
               "verified": true

            },
            {
               "name": "brendan_1",
               "nftsCount": 98,
               "avatar": "images/avatar.png",
               "verified": false
            },
            {
               "name": "damiann",
               "nftsCount": 97,
               "avatar": "images/avatar.png",
               "verified": false
            }
            ,
            {
               "name": "damiann",
               "nftsCount": 97,
               "avatar": "images/avatar.png",
               "verified": false
            }
            ,
            {
               "name": "damiann",
               "nftsCount": 97,
               "avatar": "images/avatar.png",
               "verified": false
            }
            ,
            {
               "name": "damiann",
               "nftsCount": 97,
               "avatar": "images/avatar.png",
               "verified": false
            }
            

         ]} />  */}






         {/* <Featured items={FeatureCards} />
         <Trending cards={TrendingCards} />
         <TopCollectors collectors={collectors} />

         <How title='HOW IT WORKS'
            description="Discover, collect, and sell extraordinary NFTs
       on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM."
            items={[
               {
                  "title": "DIGITAL CURRENCY",
                  "description": 'You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange',
               },
               {
                  "title": 'CRYPTO WALLET',
                  "description": 'A crypto wallet, such as Metamask, stores your ETH and processes transactions on the Ethereum blockchain.',
               },
               {
                  "title": 'BUM.',
                  "description": "Let'connect your wallet to BUM,edit your profile,and begin interacting in the space.",
               }
            ]} />

         <Auctions cards={AuctionsItems} />



         <Footer /> */}



         <Header />
         <br></br>


         <ProductImage url="/images/nft.jpg" />
         <ProductInfoTitle text="Shallow Son" />
         <ProductInfoPrice amount={3} currency="ETH"/>
         <ProductInfoStatus/>
         <ProductInfoLikes amount={5400}/>
         <ProductInfoCreator name='toadnft' avatar='images/avatar.png' />
         <ProductInfoTimer timeEnd={10000} />

         <br></br>
         <Footer />





      </div>
   )
}
