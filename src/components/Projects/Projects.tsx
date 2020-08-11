import React, { useContext, useEffect, useState } from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled';

import PortfolioContext from 'context/context';
import Title from 'components/Title';
import ProjectImg from 'components/Image/ProjectImg';
import theme from 'styles/theme';
import { buttonStyle, heroButtonStyle } from 'styles/shared';
import { Project } from '../../../@types';

const ProjectsSection = styled.section`
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkBlue};
  margin-top: -15rem;
  padding-top: 15rem;

  @media (max-width: ${theme.breakpoints.tabLand}) {
    margin-top: 0;
    padding-top: 5rem;
  }
`;

const ProjectWrapper = styled.div`
  margin-bottom: 15rem;

  @media (max-width: ${theme.breakpoints.phone}) {
    margin-bottom: 0rem;
  }

  .row {
    margin-bottom: 8rem;

    @media (max-width: ${theme.breakpoints.phone}) {
      margin-bottom: 4rem;
    }
  }
`;

const ProjectWrapperText = styled.div`
  text-align: left;

  @media (max-width: ${theme.breakpoints.phone}) {
    margin-bottom: 2.5rem !important;
  }
  @media (max-width: ${theme.breakpoints.tabLand}) {
    margin-bottom: 4.8rem;
  }

  & p > a {
    color: ${theme.colors.secondary};
  }
`;

const ProjectWrapperTextTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 1.8rem;
  font-size: ${theme.fontSize.mid};

  @media (max-width: ${theme.breakpoints.phone}) {
    font-size: 2rem;
  }
`;

const ProjectWrapperImage = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.tabLand}) {
    width: 100%;
    margin: 0;
  }

  & .thumbnail {
    border: none;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.5s box-shadow,
      0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

    @media (max-width: ${theme.breakpoints.phone}) {
      border: 1px solid #d2d2d2;
      box-shadow: none;
      margin-bottom: 3.2rem;
    }
  }
`;

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <ProjectsSection>
      <Container>
        <ProjectWrapper>
          <Title title="Projects" />
          {projects.map((project: Project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={6} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <ProjectWrapperText>
                      <ProjectWrapperTextTitle>{title || 'Project Title'}</ProjectWrapperTextTitle>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          css={[buttonStyle, heroButtonStyle]}
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </ProjectWrapperText>
                  </Fade>
                </Col>
                <Col lg={{ span: 4, offset: 2 }} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <ProjectWrapperImage>
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </ProjectWrapperImage>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </ProjectWrapper>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
