import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAlt from '@mui/icons-material/ThumbDownAlt';
import ThumbDownAltOutlined from '@mui/icons-material/ThumbDownAltOutlined';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';


import styles from './CatCard.module.css';

export type CatCardProps = {
  id: number;
  imageUrl: string;
  favourite: boolean;
  voted: boolean | null;
  upvotes: number;
  downvotes: number;
  className?: string | undefined;
}

export function CatCard(props: CatCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }} className={props.className}>
      <Box className={styles.content}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="A Cat"/>

        { props.favourite ?
          <Button size="small" className={styles.favourite}><Favorite /></Button>
          : <Button size="small" className={styles.favourite}><FavoriteBorder /></Button>
        }
        </Box>
      <CardActions>
        { props.voted ?
          <Button variant="contained" className={styles.action}><ThumbUpAlt /></Button>
          : <Button variant="outlined" className={styles.action}><ThumbUpAltOutlined /></Button>
        }
        { props.voted === false ?
          <Button variant="contained" className={styles.action}><ThumbDownAlt /></Button>
          : <Button variant="outlined" className={styles.action}><ThumbDownAltOutlined /></Button>
        }
      </CardActions>
    </Card>
  );
}
