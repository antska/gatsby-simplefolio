import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import {
  buttonStyle,
  heroButtonStyle,
  heroCtaStyle,
  HeroSection,
  heroTitleStyle,
} from '../../styles/shared';
import { textColorMain } from '../../styles/typography';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <HeroSection id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 css={heroTitleStyle}>
            {title || 'Hi, my name is'} <span css={textColorMain}>{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p css={heroCtaStyle}>
            <span css={[buttonStyle, heroButtonStyle]}>
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </HeroSection>
  );
};

export default Hero;
