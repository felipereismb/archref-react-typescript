import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Toast from '.';

const mockedRemoveToast = jest.fn();

jest.mock('../../../hooks/toast', () => {
  return {
    useToast: () => ({
      removeToast: mockedRemoveToast,
    }),
  };
});

describe('ToastProvider', () => {
  test('Toast components renders', () => {
    const minProps = {
      styleAnimation: 1,
      message: {
        id: '12',
        title: 'message',
      },
    };

    const { getAllByAltText, getAllByTestId } = render(<Toast {...minProps} />);

    expect.assertions(4);

    expect(getAllByTestId('button-remove')).toHaveLength(1);
    expect(screen.getByText('message')).toBeInTheDocument();
    expect(getAllByAltText(/Notification icon/i)).toHaveLength(1);
    expect(getAllByAltText(/Close toast icon/i)).toHaveLength(1);
  });

  test('Toast components renders', async () => {
    const Props = {
      styleAnimation: 1,
      message: {
        id: '12',
        title: '',
        description: 'descricao',
      },
    };

    const { getByTestId, getByAltText, getByText } = render(
      <Toast {...Props} />,
    );

    const notificationIcon = getByAltText(/Notification icon/i);
    const description = getByText(/descricao/i);

    const buttonRemove = getByTestId('button-remove');
    fireEvent.click(buttonRemove);

    await waitFor(() => {
      expect(mockedRemoveToast).toHaveBeenCalledWith(
        expect.stringContaining('12'),
      );
    });

    expect(description).toBeInTheDocument();
    expect(notificationIcon).toBeInTheDocument();
  });
});
