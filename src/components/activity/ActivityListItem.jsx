import React from "react";
import Avatar from "../avatar/Avatar";
import styles from "./ActivityListItem.module.scss"

export default function ActivityListItem({ user, created_at, nft, type }) {



    return (
        <div className={styles['activity-list-item']}>
            <Avatar  size={90} url='images/avatar.png'  />
            <div className={styles['activity-list-item-details']}>
            <p>1233
            </p>
      <p>12331</p>
            </div>
        </div>
    );
};


