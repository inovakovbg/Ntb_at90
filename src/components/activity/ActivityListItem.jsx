import React from "react";
import Avatar from "../avatar/Avatar";
import styles from "./ActivityListItem.module.scss"
import Link from "../link/Link";
import formatDistance from 'date-fns/formatDistance';
import parseISO from 'date-fns/parseISO';
import { Container, Stack } from "@mui/material";
import { useState, useEffect, useRef } from "react";


export default function ActivityListItem({ user, created_at, nft, type = 'like' }) {


{
    return (
        <Container maxWidth="xl">
            <Stack
                direction="row"
                spacing={2}
                className={styles["list-item"]}
            >
                <Avatar size={56} verified={user.verified} url={user.avatar.url} />
                <Stack>
                    <p className={styles.text}>
                        <span className={styles.user}>{user.username}</span>{" "}
                        {type == "like" ? "liked" : "bought"}{" "}
                        <Link color="secondary" href={`/product/${nft.id}`}>
                            "{nft.name}"
                        </Link>{' '}by{' '}
                        <Link color="secondary" href={`/profile/${user.id}`} >
                            {nft.owner.username}
                        </Link>
                    </p>
                    <p className={styles["text-secondary"]}>
                        {formatDistance(parseISO(created_at), new Date())} ago
                    </p>
                </Stack>
            </Stack>
        </Container>
    );
}}