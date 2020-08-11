import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  buttonStyle,
  heroButtonStyle,
  heroCtaStyle,
  HeroSection,
  heroTitleStyle,
} from 'styles/shared';
import SEO from 'components/SEO';

const NotFound = () => (
  <>
    <SEO location="/404" type="Organization" title="404" description="404 page not found" />
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

export default NotFound;
