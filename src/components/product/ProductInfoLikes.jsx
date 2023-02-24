import React from "react";
import styles from "./ProductInfoLikes.module.scss";
import { Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import millify from "millify";

export default function ProductInfoLikes({amount=0}) {
  return (
    <div className={styles["product-info-likes"]}>
      <Chip className={styles.likes} color="secondary" icon={<FavoriteIcon />} label={millify(amount)} variant="outlined" />
    </div>
  )

}
