import React from 'react';
import { render, screen } from '@testing-library/react';

import SignIn from './index';

describe('SignIn', () => {
  test('renders all texts', () => {
    render(<SignIn />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
