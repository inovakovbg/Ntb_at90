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


<Footer></Footer>
  
  </div>
  )
}
