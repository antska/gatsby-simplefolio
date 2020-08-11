import React, { useContext } from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import styled from '@emotion/styled';

import PortfolioContext from 'context/context';
import Title from 'components/Title';
import theme from 'styles/theme';
import { buttonStyle, resumeButtonStyle } from 'styles/shared';

const ContactSection = styled.section`
  background-image: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 100%
  );
  -webkit-clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  padding: 15rem 0 10rem 0;
  margin-top: -15rem;
  margin-bottom: -1px;
  color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.tabLand}) {
    padding: 10rem 0;
    clip-path: none;
    margin-top: 0;
    -webkit-clip-path: none;
  }
`;

const ContactWrapper = styled.div`
  margin-top: 3.2rem;
  padding: 0 2rem;
  backface-visibility: hidden;

  & a {
    font-size: 2.4rem;
    // Responsive for contact text
    @media (max-width: ${theme.breakpoints.phone}) {
      font-size: 2rem;
    }
  }
`;

const ContactWrapperText = styled.p`
  margin-bottom: 2.5rem;
  font-size: 2.4rem;

  & a {
    font-size: 2.4rem;
    // Responsive for contact text
    @media (max-width: ${theme.breakpoints.phone}) {
      font-size: 2rem;
    }
  }
`;

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <ContactSection>
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <ContactWrapper>
            <ContactWrapperText>
              {cta || 'Would you like to work with me? Awesome!'}
            </ContactWrapperText>
            <a
              target="_blank"
              rel="noopener noreferrer"
              css={[buttonStyle, resumeButtonStyle]}
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a>
          </ContactWrapper>
        </Fade>
      </Container>
    </ContactSection>
  );
};

export default Contact;
