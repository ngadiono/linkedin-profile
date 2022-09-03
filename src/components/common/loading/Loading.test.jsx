import React from 'react';
import React from 'react';
import { render, screen } from '@testing-library/react';

import Loading from './Loading';

describe('Components :', () => {
  test('loading component should be rendered', () => {
    render(<Loading />);
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent('Loading...');
  });
});
