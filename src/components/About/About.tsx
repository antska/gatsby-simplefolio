import React, { useContext, useEffect, useState } from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { Col, Container, Row } from 'react-bootstrap';
import styled from '@emotion/styled';

import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import theme from '../../styles/theme';
import { buttonStyle, resumeButtonStyle } from '../../styles/shared';

const AboutSection = styled.section`
  background-color: ${theme.colors.primary};
  background-image: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 100%
  );
  color: ${theme.colors.white};
  height: 100%;
  border-top: 0px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  padding-bottom: 10%;

  @media (max-width: ${theme.breakpoints.tabLand}) {
    height: 100%;
    -webkit-clip-path: none;
    clip-path: none;
  }
`;

const AboutWrapper = styled(Row)`
  @media (max-width: ${theme.breakpoints.phone}) {
    padding-bottom: 5rem;
  }
`;

const AboutWrapperImage = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tabPort}) {
    padding-bottom: 6.4rem;
  }
  @media (max-width: ${theme.breakpoints.tabLand}) {
    height: 100%;
  }
`;

const AboutWrapperInfo = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${theme.breakpoints.phone}) {
    align-items: center;
  }
`;

const AboutWrapperInfoText = styled.p`
  text-align: left;

  @media (max-width: ${theme.breakpoints.tabPort}) {
    font-size: 1.5rem;
    text-align: center;
  }
  @media (max-width: ${theme.breakpoints.phone}) {
    font-size: 1.6rem;
    text-align: center;
  }
`;

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <AboutSection>
      <Container>
        <Title title="About Me" />
        <AboutWrapper>
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <AboutWrapperImage>
                <AboutImg alt="profile picture" filename={img} />
              </AboutWrapperImage>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <AboutWrapperInfo>
                <AboutWrapperInfoText>
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </AboutWrapperInfoText>
                <AboutWrapperInfoText>
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </AboutWrapperInfoText>
                <AboutWrapperInfoText>
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </AboutWrapperInfoText>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      css={[buttonStyle, resumeButtonStyle]}
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </AboutWrapperInfo>
            </Fade>
          </Col>
        </AboutWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
