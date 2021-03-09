import React from 'react';
import { render, screen } from '@testing-library/react';
import ToastContainer from '.';

describe('ToastProvider', () => {
  test('Toast components renders', () => {
    render(<ToastContainer messages={[{ id: '12', title: 'message' }]} />);

    expect(screen.getByText('message')).toBeInTheDocument();
  });
});
