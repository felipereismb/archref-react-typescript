import styled from 'styled-components';
import Theme from '../../../styles/Theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: ${Theme.breakPoints.notebook}) {
    flex-direction: column-reverse;
    position: relative;
  }
  @media (max-width: ${Theme.breakPoints.mobile}) {
    flex-direction: column;
  }
`;