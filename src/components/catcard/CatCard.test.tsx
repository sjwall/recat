/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import renderer from 'react-test-renderer';
import { CatCard } from './CatCard';

describe('CatCard', () => {
  test('renders default', () => {
    const tree = renderer.create(<CatCard
      imageUrl="https://cdn2.thecatapi.com/images/dmFMeVo5C.jpg"
      favourite={false}
      voted={null}
      upvotes={0}
      downvotes={0}
      onFavourite={() => {}}
      onVote={() => {}}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders favourite', () => {
    const tree = renderer.create(<CatCard
      imageUrl="https://cdn2.thecatapi.com/images/dmFMeVo5C.jpg"
      favourite={true}
      voted={null}
      upvotes={0}
      downvotes={0}
      onFavourite={() => {}}
      onVote={() => {}}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders upvote', () => {
    const tree = renderer.create(<CatCard
      imageUrl="https://cdn2.thecatapi.com/images/dmFMeVo5C.jpg"
      favourite={false}
      voted={true}
      upvotes={1}
      downvotes={0}
      onFavourite={() => {}}
      onVote={() => {}}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders downvote', () => {
    const tree = renderer.create(<CatCard
      imageUrl="https://cdn2.thecatapi.com/images/dmFMeVo5C.jpg"
      favourite={false}
      voted={false}
      upvotes={0}
      downvotes={1}
      onFavourite={() => {}}
      onVote={() => {}}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
