import React from "react";
import styled from "styled-components";
import { SHADOW_COLOR } from "../style/color";

const Header = () => {
  return (
    <HeaderC>
      <Title>Flex Genereter</Title>
    </HeaderC>
  );
};

const HeaderC = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  text-shadow: 0 3px 5px ${SHADOW_COLOR};
  color: #fff;
  font-size: 40px;
`;

export default Header;
