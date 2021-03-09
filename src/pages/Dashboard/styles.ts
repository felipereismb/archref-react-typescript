import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  width: 100vw;
  padding: 0 48px;

  background-color: ${Theme.colors.background};

  @media (max-width: ${Theme.breakPoints.ipad}) {
    padding: 0 60px;
    row-gap: 20px;
  }

  @media (max-width: ${Theme.breakPoints.mobile}) {
    padding: 0 21px;
  }
`;
