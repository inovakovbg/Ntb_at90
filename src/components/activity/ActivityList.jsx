import React from "react";
import Avatar from "../avatar/Avatar";
import styles from "./ActivityList.module.scss"
import Link from "../link/Link";
import formatDistance from 'date-fns/formatDistance';
import parseISO from 'date-fns/parseISO';
import { Container, Stack } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import ActivityListItem from "./ActivityListItem";
import classNames from "classnames";


export default function ActivityList({ items }) {


    return (
        <div className={classNames(styles["activity-list"])}>
            <Stack direction="column" spacing={2}>
                {items.map((item) => {
                    return <ActivityListItem key={item.index} user={item.user} created_at={item.created_at} nft={item.nft} type={item.type}
                    />
                })}
            </Stack>
        </div>
    )
};
