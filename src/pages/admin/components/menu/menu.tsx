import styled from "@emotion/styled";
import React from "react";

export const Menu = (props: { menuItems: any[] }) => {
  const { menuItems } = props;
  return <MenuContainer></MenuContainer>;
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
