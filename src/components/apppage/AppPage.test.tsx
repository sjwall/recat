import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import { store } from '../../app/store';
import { AppPage } from './AppPage';

describe('AppPage', () => {
  test('renders default', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <AppPage
            title="Page title"
            user={{ name: 'users name '}}
          >
            <div>Example child</div>
          </AppPage>
        </Provider>
      </MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
