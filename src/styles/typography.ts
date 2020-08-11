import { css } from '@emotion/core';
import theme from './theme';

export const typeStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

  h1 {
    font-weight: 700;
  }

  p,
  a {
    font-family: 'Montserrat', sans-serif;
    font-size: ${theme.fontSize.default};
  }

  a,
  a:link,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
  }

  a:hover {
    transition: all 0.3s ease-in-out;
  }
`;

export const textColorMain = css`
  background-image: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  // Responsive text purple style
  @media (max-width: ${theme.breakpoints.phone}) {
    background-image: none;
    -webkit-text-fill-color: ${theme.colors.secondary};
  }

  &:hover {
    transform: translateX(2px);
  }
`;
