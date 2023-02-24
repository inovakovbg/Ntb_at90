import React from "react";
import styles from "./ProductInfoPrice.module.scss";
import { Typography } from "@mui/material";

export default function ProductInfoPrice({amount=0,currency}) {
    return (
<div className={styles["product-info-price"]}>
  <Typography className={styles.price}>{'on sale for '+amount+' '+currency}</Typography>
</div>
    )

}
  