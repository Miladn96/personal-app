import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

