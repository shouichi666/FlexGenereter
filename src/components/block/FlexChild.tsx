import React, { useEffect, useState } from "react";
import { Text } from "../atoms";
import styled from "styled-components";

type propType = {
  child: number;
  i: number;
};

const BlockBox: React.FC<propType> = React.memo(({ child, i }) => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    setState(true);

    return () => setState(false);
  }, [state]);

  return (
    <Block key={i} state={state}>
      <Text text={String(child)} fontSize={20} textAlign='center' />
    </Block>
  );
});

const Block = styled.div<{
  state: boolean;
}>`
  width: calc(100% / 4 - 40px);
  min-width: 50px;
  // height: 90px;
  background: rgba(223, 204, 229, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-item: center;
  justify-content: center;
  transition: 0.3s;
  transform: scale(0, 0);
  padding: 40px;
  ${({ state }) =>
    state &&
    `
      transform: scale(1,1);
      transition: 0.5s;
    `};
`;

export default BlockBox;
