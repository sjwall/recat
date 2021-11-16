/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

  test('favourites', () => {
    const onClick = jest.fn();
    const result = render(
      <CatCard
        imageUrl="https://cdn2.thecatapi.com/images/dmFMeVo5C.jpg"
        favourite={false}
        voted={false}
        upvotes={0}
        downvotes={1}
        onFavourite={onClick}
        onVote={() => {}}
      />
    );
    fireEvent.click(result.getByTestId('favourite'));
    expect(onClick).toHaveBeenCalledWith(true);
  });

  test('unfavourites', () => {
    const onClick = jest.fn();
    const result = render(
      <CatCard
        imageUrl="https://cdn2.thecatapi.com/images/dmFMeVo5C.jpg"
        favourite={true}
        voted={false}
        upvotes={0}
        downvotes={1}
        onFavourite={onClick}
        onVote={() => {}}
      />
    );
    fireEvent.click(result.getByTestId('favourite'));
    expect(onClick).toHaveBeenCalledWith(false);
  });

  test('up vote', () => {
    const onClick = jest.fn();
    const result = render(
      <CatCard
        imageUrl="https://cdn2.thecatapi.com/images/dmFMeVo5C.jpg"
        favourite={true}
        voted={null}
        upvotes={0}
        downvotes={1}
        onFavourite={() => {}}
        onVote={onClick}
      />
    );
    fireEvent.click(result.getByTestId('voteup'));
    expect(onClick).toHaveBeenCalledWith(true);
  });

  test('down vote', () => {
    const onClick = jest.fn();
    const result = render(
      <CatCard
        imageUrl="https://cdn2.thecatapi.com/images/dmFMeVo5C.jpg"
        favourite={true}
        voted={null}
        upvotes={0}
        downvotes={1}
        onFavourite={() => {}}
        onVote={onClick}
      />
    );
    fireEvent.click(result.getByTestId('votedown'));
    expect(onClick).toHaveBeenCalledWith(false);
  });

  test('remove up vote', () => {
    const onClick = jest.fn();
    const result = render(
      <CatCard
        imageUrl="https://cdn2.thecatapi.com/images/dmFMeVo5C.jpg"
        favourite={true}
        voted={true}
        upvotes={0}
        downvotes={1}
        onFavourite={() => {}}
        onVote={onClick}
      />
    );
    fireEvent.click(result.getByTestId('voteup'));
    expect(onClick).toHaveBeenCalledWith(null);
  });

  test('remove down vote', () => {
    const onClick = jest.fn();
    const result = render(
      <CatCard
        imageUrl="https://cdn2.thecatapi.com/images/dmFMeVo5C.jpg"
        favourite={true}
        voted={false}
        upvotes={0}
        downvotes={1}
        onFavourite={() => {}}
        onVote={onClick}
      />
    );
    fireEvent.click(result.getByTestId('votedown'));
    expect(onClick).toHaveBeenCalledWith(null);
  });
});
