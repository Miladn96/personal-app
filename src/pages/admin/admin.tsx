import styled from '@emotion/styled'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Admin = () => {
  return (
    <Container>
      <BlueLine />
      <Outlet />
    </Container>
  )
}

const BlueLine = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 228px;
  background-color: #d0e4f4;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled(Center)`
  width: 100vw;
  height: 100vh;
`
