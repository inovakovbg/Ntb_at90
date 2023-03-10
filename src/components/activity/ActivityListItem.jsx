import React from "react";
import Avatar from "../avatar/Avatar";
import styles from "./ActivityListItem.module.scss"
import Link from "../link/Link";
import formatDistance from 'date-fns/formatDistance';
import parseISO from 'date-fns/parseISO';


export default function ActivityListItem({ user, created_at, nft, type = 'liked' }) {



    return (
        <div className={styles['activity-list-item']}>
            <Avatar size={90} url='images/avatar.png' />
            <div className={styles['activity-list-item-details']}>
                <p>
                    {user} {type} 
                    <Link href={`/product/${nft.id}`}>
                        "{nft.name}"
                    </Link> by    
                    <Link href={`/profile/${nft.owner.username}`}>
                        {nft.owner.username}
                    </Link>
                </p>
                
                <p>{formatDistance(parseISO(created_at), new Date())}</p>
            </div>
        </div>
    )
};

