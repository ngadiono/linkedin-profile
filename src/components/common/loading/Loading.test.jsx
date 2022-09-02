import React from 'react';
import { render, screen } from '@testing-library/react';

import Loading from './Loading';

test('renders component loading', () => {
  render(<Loading />);
  expect(screen.getByTestId('loading')).toHaveTextContent('Loading...');
});
