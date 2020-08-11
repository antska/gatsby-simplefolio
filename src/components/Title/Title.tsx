import React from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import styled from '@emotion/styled';

import theme from 'styles/theme';

type Props = {
  title: string;
};

const H2 = styled.h2`
  margin: 0px;
  margin-bottom: 4.5rem;
  font-size: ${theme.fontSize.big};
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: ${theme.breakpoints.phone}) {
    font-size: 2.8rem;
  }
`;

const Title = ({ title }: Props) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <H2>{title}</H2>
  </Fade>
);

export default Title;
