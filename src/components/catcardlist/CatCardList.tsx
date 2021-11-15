import React from 'react';
import { Cat } from '../../features/thecatapi/cat.model';
import { CatCard } from '../catcard/CatCard'


import styles from './CatCardList.module.css';

export type CatCardListProps = {
  cats: Cat[] | undefined
}

export function CatCardList(props: CatCardListProps) {
  return (
    <div className={styles.content}>
      {
        typeof props.cats !== 'undefined' ? props.cats.map(p => <CatCard
            className={styles.item}
            key={p.id}
            imageUrl={p.url}
            favourite={true}
            voted={true}
            upvotes={12}
            downvotes={6}
          />)
          : <></>
      }
    </div>
  );
}
