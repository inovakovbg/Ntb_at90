import React from "react";
import Avatar from "../avatar/Avatar";
import styles from "./ActivityListItem.module.scss"
import Link from "../link/Link";
import formatDistance from 'date-fns/formatDistance';
import parseISO from 'date-fns/parseISO';
import { Stack } from "@mui/material";


export default function ActivityListItem({ user, created_at, nft, type = 'like' }) {



    return (
        <div className={styles['activity-list-item']}>
            <Stack direction="row"   spacing={2}>
            <Avatar size={90} url='images/avatar.png' />
            <Stack className={styles['activity-list-item-details']}>
                <p>
                    {user}  {type == "like" ? "liked" : "bought"}{' '}
                    <Link color="secondary" href={`/product/${nft.id}`}>
                        "{nft.name}"
                    </Link>{' '}by{' '}    
                    <Link color="secondary" href={`/profile/${nft.owner.id}`}>
                        {nft.owner.username}
                    </Link>
                </p>
                
                <p>{formatDistance(parseISO(created_at), new Date())}</p>
            </Stack>
            </Stack>
        </div>
    )
};

