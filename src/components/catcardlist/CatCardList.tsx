import React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { Cat } from '../../features/thecatapi/cat.model';
import { CatCard } from '../catcard/CatCard'

import styles from './CatCardList.module.css';

/**
 * Properties for CatCardList.
 */
export type CatCardListProps = {
  cats: Cat[] | undefined
  onFavourite: (image_id: string) => void;
  onUnfavourite: (favourite_id: string, image_id: string) => void;
  onVote: (value: 1 | 0, image_id: string) => void;
  onUnvote: (vote_id: string, image_id: string) => void;

  /**
   * Class name passed to root element.
   */
  className?: string | undefined;
}

export function CatCardList(props: CatCardListProps) {

  const handleFavourite = (value: boolean, cat: Cat) => {
    if (value) {
      props.onFavourite(cat.id);
    } else if (cat.favourite) {
      props.onUnfavourite(cat.favourite?.id, cat.id)
    }
  }

  const handleVote = (value: boolean | null, cat: Cat) => {
    if (value !== null) {
      props.onVote(value ? 1 : 0, cat.id);
    } else if (cat.vote) {
      props.onUnvote(cat.vote?.id, cat.id)
    }
  }

  return (
    <Box sx={{ minHeight: 393, padding: 1 }}>
      <Masonry columns={4} spacing={1} sx={{ maxWidth: (340 * 4) }}>
        {
          typeof props.cats !== 'undefined' ? props.cats.map(p => <CatCard
              className={styles.item}
              key={p.id}
              imageUrl={p.url}
              favourite={typeof p.favourite !== 'undefined'}
              voted={typeof p.vote === 'undefined' ? null : Boolean(p.vote.value)}
              upvotes={12}
              downvotes={6}
              onFavourite={(v) => handleFavourite(v, p)}
              onVote={(v) => handleVote(v, p)}
            />)
            : <></>
        }
      </Masonry>
    </Box>
  );
}
