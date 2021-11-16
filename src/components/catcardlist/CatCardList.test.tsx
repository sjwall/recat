/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import renderer from 'react-test-renderer';
import { CatCardList } from './CatCardList';

describe('CatCardList', () => {
  test('renders default', () => {
    const tree = renderer.create(<CatCardList
      cats={[
        {
          id: '1',
          url: "https://cdn2.thecatapi.com/images/dmFMeVo5C.jpg",
          sub_id: 'a',
          created_at: '2021-11-16T09:44:42.000Z'
        },
        {
          id: '2',
          url: "https://cdn2.thecatapi.com/images/uNLsqJwB-.jpg",
          sub_id: 'a',
          created_at: '2021-11-16T09:44:42.000Z'
        },
        {
          id: '3',
          url: "https://cdn2.thecatapi.com/images/bSXdyzOUO.jpg",
          sub_id: 'b',
          created_at: '2021-11-16T09:44:42.000Z'
        },
        {
          id: '4',
          url: "https://cdn2.thecatapi.com/images/TfRi1De3D.png",
          sub_id: 'c',
          created_at: '2021-11-16T09:44:42.000Z'
        }
      ]}
      onFavourite={() => {}}
      onUnfavourite={() => {}}
      onVote={() => {}}
      onUnvote={() => {}}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
