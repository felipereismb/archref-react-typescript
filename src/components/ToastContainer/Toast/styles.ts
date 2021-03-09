import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import Theme from '../../../styles/Theme';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasdescription: string;
}

const toastTypeVariations = {
  info: css`
    background: #e1f5fe;
    color: #0277bd;
  `,

  success: css`
    background: #b9f6ca;
    color: #1b5e20;
  `,

  error: css`
    background: #fcf2f2;
    border: 1px solid #990000;
    color: #444444;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 336px;

  position: relative;
  padding: 14px 30px 14px 12px;
  border-radius: 4px;

  display: flex;
  align-items: end;

  & + div {
    margin-top: 10px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  img {
    height: 20px;
    width: auto;
  }

  div {
    flex: 1;
    margin-left: 10px;

    font-size: 15px;

    p {
      margin-top: 4px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 15px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    transition: opacity 0.25s;

    &:hover {
      opacity: 0.85;
    }
  }

  ${props =>
    !props.hasdescription &&
    css`
      align-items: center;

      img {
        margin-top: 0;
      }
    `}
`;
