import React, { useState, useEffect } from "react";
import styles from "./ProductInfoCreator.module.scss";
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import User from "../user/User";
import classNames from "classnames";
import { Paper } from "@mui/material";




export default function ProductInfoCreator({ name, avatar, verified = false }) {



  return (
    <div className={styles["product-info-creator"]}>
      <Typography className={styles.title}>CREATOR</Typography>

      <Container container className={styles["user-container"]} disableGutters>
        <User size='53px' name={name} verified={verified} avatar={avatar} />
      </Container>

    </div>

  )
}