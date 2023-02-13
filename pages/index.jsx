import Example from "../src/components/example/Example";
// import Logo from "../src/components/logo/Logo";
import Header from "../src/components/header/Header";
import Avatar from "../src/components/avatar/Avatar";
import User from "../src/components/user/User";
import Card from "../src/components/card/Card";
import React from "react";
import { avatarClasses } from "@mui/material";

export default function Index() {
  return (
    <div>
  {/* <Example />
  <Header /> */}
    {/* <Avatar url="/images/avatar.png" size='180px' verified=''/> */}
  <User size='150px' name="Ivan Nov" info="13200pt" verified="true"/>
  <Card name="Clock" likes={560}  mediaUrl="/images/nft.jpg" 
   user={{avatar:{url:"/images/avatar.png",verified:true}}} price="1300" currency='ETH' /> 
  </div>
  )
}
