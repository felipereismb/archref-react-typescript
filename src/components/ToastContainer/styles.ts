import styled from 'styled-components';

interface ToastProps {
  display: boolean;
}

export const Container = styled.div<ToastProps>`
  position: absolute;
  right: 0;
  top: 0;
  padding: ${props => (props.display ? '18px' : '0')};
  overflow: hidden;
  z-index: 9999;
`;
