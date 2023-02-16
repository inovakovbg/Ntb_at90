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

export default function Index() {
  return (

    <div>
  {/* <Example /> */}

  {/* <Header></Header> */}
  
    {/* <Avatar url="/images/avatar.png" size='180px' verified=''/> */}
  {/* <User size='150px' name="Ivan Nov" info="13200pt" verified="true"/> */}
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


{/* <Footer /> */}

< Step number={1} title="DIGITAL CURRENCY" description='You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange'/>
  
  <How items={[
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
  ]}/> 


  </div>
  )
}
