import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders Recat', () => {
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText(/Recat/i)).toBeInTheDocument();
});

test('renders 404', () => {
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/abd']}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(getByText(/The requested resource was not found/i)).toBeInTheDocument();
});
