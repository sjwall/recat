import React from 'react';
import { Cat } from '../../features/thecatapi/cat.model';
import { CatCard } from '../catcard/CatCard'


import styles from './CatCardList.module.css';

export type CatCardListProps = {
  cats: Cat[] | undefined
  onFavourite: (image_id: string) => void;
  onUnfavourite: (favourite_id: string, image_id: string) => void;
}

export function CatCardList(props: CatCardListProps) {

  const handleFavourite = (value: boolean, cat: Cat) => {
    if (value) {
      props.onFavourite(cat.id);
    } else if (cat.favourite) {
      props.onUnfavourite(cat.favourite?.id, cat.id)
    }
  }

  return (
    <div className={styles.content}>
      {
        typeof props.cats !== 'undefined' ? props.cats.map(p => <CatCard
            className={styles.item}
            key={p.id}
            imageUrl={p.url}
            favourite={typeof p.favourite !== 'undefined'}
            voted={true}
            upvotes={12}
            downvotes={6}
            onFavourite={(v) => handleFavourite(v, p)}
          />)
          : <></>
      }
    </div>
  );
}
