import React from "react";
import Avatar from "../avatar/Avatar";
import styles from "./ActivityListItem.module.scss"
import Link from "../link/Link";
import formatDistance from 'date-fns/formatDistance';
import parseISO from 'date-fns/parseISO';
import { Container, Stack } from "@mui/material";
import { useState, useEffect, useRef } from "react";


export default function ActivityListItem({ user, created_at, nft, type = 'like' }) {


    return (
        <div maxWidth="xl" className={styles['activity-list-item']}>


            <Avatar url={user.avatar.url}
                size='56px'
                verified={user.verified}
            />

            <div direction="column" className={styles['activity-list-item-details']}>
                <p>
                    {user.username}  {type == "like" ? "liked" : "bought"}{' '}
                    <Link color="secondary" href={`/product/${nft.id}`}>
                        "{nft.name}"
                    </Link>{' '}by{' '}
                    <Link color="secondary" href={`/profile/${user.id}`}>
                        {nft.owner.username}
                    </Link>
                </p>

                <p>{formatDistance(parseISO(created_at), new Date())}</p>

            </div>
        </div>
    )
};

