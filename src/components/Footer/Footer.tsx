import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import styled from '@emotion/styled';
import { AngleUp } from '@emotion-icons/fa-solid';

import theme from 'styles/theme';
import PortfolioContext from 'context/context';
import { githubButtons } from 'mock/data';
import GithubButtons from 'components/GithubButtons';
import { Network } from '../../../@types';

const FooterSection = styled.footer`
  background-color: ${theme.colors.darkGrey};
  color: ${theme.colors.white};
  padding: 4.8rem 0;

  @media (max-width: ${theme.breakpoints.phone}) {
    border: 0px;
  }

  & hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    width: 50%;
    border-top: 2px solid rgba(255, 255, 255, 0.1);
  }
`;

const BackToTop = styled.span`
  & svg {
    color: ${theme.colors.white};
    margin: 1rem 0 ${theme.fontSize.default};
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  & a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${theme.colors.white};
    font-size: 3rem;
    width: 5rem;
    height: 5rem;
    margin: ${theme.fontSize.default} ${theme.fontSize.default};
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const FooterText = styled.p`
  color: grey;
  font-size: 1.3rem;

  a {
    color: grey;
    font-size: 1.3rem;
    transition: all 0.4s;
    display: inline-block;
    background-color: ${theme.colors.darkGrey};

    &:hover,
    &:active {
      color: ${theme.colors.primary};
      -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    }
  }
`;

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <FooterSection className="navbar-static-bottom">
      <Container>
        <BackToTop>
          <Link to="hero" smooth duration={1000}>
            <AngleUp size={20} />
          </Link>
        </BackToTop>
        <SocialLinks>
          {networks &&
            networks.map((network: Network) => {
              const { id, name, url, Icon } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/antska/gatsby-simplefolio-ts-emotion'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  {Icon}
                </a>
              );
            })}
        </SocialLinks>
        <hr />
        <FooterText>
          © {new Date().getFullYear()} - Template developed by{' '}
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>
          <br /> Rewrite in TS &{' '}
          <a href="https://emotion.sh/" target="_blank" rel="noopener noreferrer">
            Emotion
          </a>{' '}
          by{' '}
          <a href="https://antska.github.io" target="_blank" rel="noopener noreferrer">
            Antonis Skandalis
          </a>
        </FooterText>

        {isEnabled && <GithubButtons />}
      </Container>
    </FooterSection>
  );
};

export default Footer;
