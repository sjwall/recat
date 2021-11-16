import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import { AppPage } from '../../components/apppage/AppPage';
import { CatCardList } from '../../components/catcardlist/CatCardList'
import {
  useGetCatsByPageQuery,
  useFavouriteMutation,
  useUnfavouriteMutation,
  useVoteMutation,
  useUnvoteMutation,
} from '../thecatapi/thecatapiAPI';
import { selectTotalPages } from '../thecatapi/thecatapiSlice';
import { useAppSelector, useAuth } from '../../app/hooks';
import { User } from '../auth/user.model';

import styles from './Home.module.css';
import { Typography } from '@mui/material';

export function Home() {
  const { t } = useTranslation();
  const [ page, setPage ] = useState(1);
  const user = useAuth().user as User;
  const pageCount = useAppSelector(selectTotalPages);

  const { data, isLoading } = useGetCatsByPageQuery({page, sub_id: user.name});
  const [favouriteCat, favouriteResponse] = useFavouriteMutation()
  const [unfavouriteCat, unfavouriteResponse] = useUnfavouriteMutation()
  const [voteCat, voteResponse] = useVoteMutation()
  const [unvoteCat, unvoteResponse] = useUnvoteMutation()


  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const handleFavourite = (image_id: string) => {
    favouriteCat({ image_id, sub_id: user.name})
  }

  const handleUnfavourite = (favourite_id: string, image_id: string) => {
    unfavouriteCat({ favourite_id, image_id })
  }

  const handleVote = (value: 1 | 0, image_id: string) => {
    voteCat({ image_id, sub_id: user.name, value })
  }

  const handleUnvote = (vote_id: string, image_id: string) => {
    unvoteCat({ vote_id, image_id })
  }

  const catList = <CatCardList
      cats={data}
      onFavourite={handleFavourite}
      onUnfavourite={handleUnfavourite}
      onVote={handleVote}
      onUnvote={handleUnvote}
    />

  return (
    <AppPage title={ t('app_name') } user={user}>
      {
        isLoading
        ? <Box className={styles.grow}><CircularProgress /></Box>
        : (pageCount > 0 ? catList : <></>)
      }
      {
        !isLoading && pageCount === 0
        ? (<Box className={styles.grow}>
            <Paper elevation={3}>
              <Typography>
                { t('upload_hint') }
              </Typography>
              <Link to="upload">
                <Button>
                  { t('upload_hint_link') }
                </Button>
              </Link>
            </Paper>
          </Box>)
        : <></>
      }
      <Pagination count={pageCount} page={page} disabled={isLoading} onChange={handlePageChange} />
    </AppPage>
  );
}
