import React from 'react';
import { CatCardList } from '../../components/catcardlist/CatCardList'

import styles from './Home.module.css';


export function Home() {
  return (
    <div>
      Hello World

      <CatCardList cats={[]} />
    </div>
  );
}
