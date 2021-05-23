import React from "react";
import { Text } from "../atoms";
import styled from "styled-components";

type propType = {
  child: number;
  i: number;
};

const BlockBox: React.FC<propType> = React.memo(({ child, i }) => {
  return (
    <Block key={i}>
      <Text text={String(child)} fontSize={20} textAlign='center' />
    </Block>
  );
});

const Block = styled.div`
  width: calc(100% / 4 - 40px);
  min-width: 50px;
  height: 90px;
  background: rgba(223, 204, 229, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-item: center;
  justify-content: center;
  transition: 1s;
`;

export default BlockBox;
