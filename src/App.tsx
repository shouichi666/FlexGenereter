import React from "react";
import styled from "styled-components";
import { FlexParent, Controller } from "./components/modules/";
import { Header, ViewCode } from "./components/block";
import { useAppSelector } from "./hooks/";

const App = () => {
  const modalState = useAppSelector((state) => state.modal);

  return (
    <>
      <Wrapper>
        <Header />
        <Space />
        <Flex>
          <FlexLeft>
            <FlexParent />
          </FlexLeft>
          <FlexRight>
            <Controller />
          </FlexRight>
        </Flex>
        <ViewCode open={modalState.open} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Space = styled.div`
  height: 40px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 10px;
`;

const FlexLeft = styled.div`
  width: 40%;
  transition: 1s;
`;

const FlexRight = styled.div`
  width: 45%;
`;

export default App;
