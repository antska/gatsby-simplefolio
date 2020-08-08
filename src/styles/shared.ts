import { css } from '@emotion/core';
import theme from './theme';

export const buttonStyle = css`
  display: inline-block;
  position: relative;
  padding: 0.8rem ${theme.fontSize.default};
  font-weight: bold;
  line-height: 1;
  z-index: 1;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 0px;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
  }
`;

export const resumeButtonStyle = css`
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.white};

  &::after {
    background: ${theme.colors.white};
  }

  &:hover {
    color: ${theme.colors.secondary};
    text-decoration: none;

    &::after {
      width: 100%;
    }
  }
`;

export const heroButtonStyle = css`
  background-image: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  border-image-slice: 1;
  cursor: pointer;
  // Responsive Button hero style
  @media (maxwidth: 37.5em) {
    background-image: none;
    border: 2px solid ${theme.colors.secondary};
    -webkit-text-fill-color: ${theme.colors.secondary};
  }

  &:after {
    background-image: linear-gradient(
      135deg,
      ${theme.colors.primary} 0%,
      ${theme.colors.secondary} 100%
    );
    // Responsive Button hero style
    @media (maxwidth: 37.5em) {
      background-image: none;
    }
  }

  &:hover {
    -webkit-text-fill-color: ${theme.colors.white};
    text-decoration: none;
    // Responsive Button hover hero style
    @media (maxwidth: 37.5em) {
      -webkit-text-fill-color: ${theme.colors.secondary};
    }

    &:after {
      width: 100%;
    }
  }
`;
