import React, { FC } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

export const Page: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ContainerStyled maxWidth="lg">{children}</ContainerStyled>;
};

const ContainerStyled = styled(Container)`
  padding-top: 84px;
`;
