import React, { useMemo } from 'react';
import { Translation } from 'react-i18next';
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

/**
 * Properties for CatCard.
 */
export type CatCardProps = {
  /**
   * Absolute url to cat image.
   */
  imageUrl: string;

  /**
   * Is this cat a favourite.
   */
  favourite: boolean;

  /**
   * Has this cat been voted for.
   */
  voted: boolean | null;

  /**
   * Number of up votes for the cat.
   */
  upvotes: number;

  /**
   * Number of down votes for the cat.
   */
  downvotes: number;

  /**
   * Class name passed to root element.
   */
  className?: string | undefined;

  /**
   * Handle favourite.
   */
  onFavourite: (value: boolean) => void;

  /**
   * Handle voting.
   */
  onVote: (value: boolean | null) => void;
}

/**
 * Displays a cat image with favourite and vote buttons.
 *
 * @param props Component properties.
 * @returns React component.
 */
export function CatCard(props: CatCardProps) {
  const score = useMemo(() => {
    return props.upvotes - props.downvotes;
  }, [props])

  return (
    <Card sx={{ maxWidth: 345 }} className={props.className}>
      <Box className={styles.content}>
        <CardMedia
          component="img"
          height="340"
          image={props.imageUrl}
          alt="A Cat"/>
        <Button
          size="small"
          className={styles.favourite}
          onClick={() => props.onFavourite(!props.favourite)}
        >
          {
            props.favourite
            ? <Favorite />
            : <FavoriteBorder />
          }
        </Button>
        </Box>
      <CardActions>
        { props.voted
          ?
            <Button
              variant="contained"
              className={styles.action}
              onClick={() => props.onVote(null)}
            >
              <ThumbUpAlt />
            </Button>
          :
            <Button
              variant="outlined"
              className={styles.action}
              onClick={() => props.onVote(true)}
            >
              <ThumbUpAltOutlined />
            </Button>
        }
        { props.voted === false
          ?
            <Button
              variant="contained"
              className={styles.action}
              onClick={() => props.onVote(null)}
            >
              <ThumbDownAlt />
            </Button>
          :
            <Button
              variant="outlined"
              className={styles.action}
              onClick={() => props.onVote(false)}
            >
              <ThumbDownAltOutlined />
            </Button>
        }
      </CardActions>
      <Box>
        <Translation>
          {(t) => t('score', { score })}
        </Translation>
      </Box>
    </Card>
  );
}
