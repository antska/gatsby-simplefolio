import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import {
  buttonStyle,
  heroButtonStyle,
  heroCtaStyle,
  HeroSection,
  heroTitleStyle,
} from '../styles/shared';

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
      <HeroSection className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 css={heroTitleStyle}>
              Sorry, this path does not exist{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p css={heroCtaStyle}>
              <Link css={[buttonStyle, heroButtonStyle]} to="/">
                Go back
              </Link>
            </p>
          </Fade>
        </Container>
      </HeroSection>
    </>
  );
};

export default NotFound;
