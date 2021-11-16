import React from 'react';
import renderer from 'react-test-renderer';
import { NotFound } from './NotFound';

describe('NotFound', () => {
  test('renders default', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
