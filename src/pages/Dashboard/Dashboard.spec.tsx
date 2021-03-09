import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Dashboard from '.';

describe('Dashboard', () => {
  test('Check if Welcome renders', () => {
    const { getByText } = render(
      <Router>
        <Dashboard />
      </Router>,
    );

    expect(getByText('Dashboard')).toBeInTheDocument();
  });
});
