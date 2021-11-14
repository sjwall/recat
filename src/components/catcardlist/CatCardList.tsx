import React from 'react';
import { CatCard, CatCardProps } from '../catcard/CatCard'


import styles from './CatCardList.module.css';

export type CatCardListProps = {
  cats: CatCardProps[]
}

export function CatCardList(props: CatCardListProps) {
  return (
    <div className={styles.content}>
      { props.cats.map(p => <CatCard className={styles.item} key={p.id} {...p} />) }
    </div>
  );
}
