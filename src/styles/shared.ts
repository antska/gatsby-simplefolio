import { css } from '@emotion/core';
import styled from '@emotion/styled';
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

  &:after {
    background: ${theme.colors.white};
  }

  &:hover {
    color: ${theme.colors.secondary};
    text-decoration: none;

    &:after {
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
  @media (max-width: ${theme.breakpoints.phone}) {
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
    @media (max-width: ${theme.breakpoints.phone}) {
      background-image: none;
    }
  }

  &:hover {
    -webkit-text-fill-color: ${theme.colors.white};
    text-decoration: none;
    // Responsive Button hover hero style
    @media (max-width: ${theme.breakpoints.phone}) {
      -webkit-text-fill-color: ${theme.colors.secondary};
    }

    &:after {
      width: 100%;
    }
  }
`;

export const heroTitleStyle = css`
  font-size: 5.6rem;
  font-weight: 700;
  margin-bottom: 3.2rem;
  text-align: left;

  @media (max-width: ${theme.breakpoints.tabLand}) {
    font-size: 4rem;
  }
  @media (max-width: ${theme.breakpoints.tabPort}) {
    font-size: 3.6rem;
    text-align: center;
  }
  @media (max-width: ${theme.breakpoints.phone}) {
    font-size: 3.5rem;
    line-height: 1.5;
  }
  @include (max-width: ${theme.breakpoints.phoneXs}) {
    font-size: 2.8rem;
  }
`;

export const heroCtaStyle = css`
  display: flex;

  @media (max-width: ${theme.breakpoints.tabPort}) {
    justify-content: center;
  }

  & a {
    font-size: 2.4rem;

    @media (max-width: ${theme.breakpoints.phone}) {
      font-size: 2rem;
    }
  }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  border-bottom: 0px;
  background: ${theme.colors.white};
  font-weight: 400;
  color: ${theme.colors.darkBlue};
  padding: 0rem 5.6rem;
  margin-bottom: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

  @media (max-width: ${theme.breakpoints.phone}) {
    padding: 0rem ${theme.fontSize.default};
  }
`;
