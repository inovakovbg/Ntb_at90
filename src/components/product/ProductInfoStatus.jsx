import React from "react";
import styles from "./ProductInfoStatus.module.scss";
import { Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function ProductInfoStatus() {
  return (
    <div className={styles["product-info-status"]}>
      <Chip className={styles.status} icon={<CircleIcon fontSize="small" />} label="LIVE" variant="filled" />
    </div>
  )

}
