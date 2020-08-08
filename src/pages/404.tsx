import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import { buttonStyle, heroButtonStyle } from '../styles/shared';
import theme from '../styles/theme';

const Section = styled.section`
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
    font-size: 3.5rem;
    line-height: 1.5;
  }
`;

const HeroTitle = styled.h1`
  font-size: 5.6rem;
  font-weight: 700;
  margin-bottom: 3.2rem;
  text-align: center;

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

const Paragraph = styled.p`
  display: flex;
  justify-content: center;

  & a {
    font-size: 2.4rem;

    @media (max-width: 37.5em) {
      font-size: 2rem;
    }
  }
`;

const NotFound = () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <Section className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <HeroTitle>
              Sorry, this path does not exist{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </HeroTitle>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <Paragraph>
              <Link css={[buttonStyle, heroButtonStyle]} to="/">
                Go back
              </Link>
            </Paragraph>
          </Fade>
        </Container>
      </Section>
    </>
  );
};

export default NotFound;
