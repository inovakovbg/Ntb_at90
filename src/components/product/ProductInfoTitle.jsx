import React from "react";
import styles from "./ProductInfoTitle.module.scss";
import { Typography } from "@mui/material";

export default function ProductInfoTitle({text}) {
    return (
<div className={styles["product-info-title"]}>
  <Typography variant="h1" className={styles.title}>{text}</Typography>
</div>
    )

}
  