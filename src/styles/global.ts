import { css } from '@emotion/core';
import theme from './theme';

const globalStyles = css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }

  section {
    padding: 5rem 0rem;

    @media (max-width: ${theme.breakpoints.phone}) {
      border: none;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

export default globalStyles;
