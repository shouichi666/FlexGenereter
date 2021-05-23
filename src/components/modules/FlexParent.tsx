import React from "react";
import styled from "styled-components";
import { FlexChild } from "../block/";
import { AddButton, RemoveButton } from "../atoms/";
import { useAppSelector, useAppDispatch } from "../../hooks/";
import { addFlexChild, removeFlexChild } from "../../stores/slices/countSlice";

const FlexParent = React.memo(() => {
  const flexChilds = useAppSelector((state) => state.count.flexChild);
  const flex = useAppSelector((state) => state.flex);
  const dispatch = useAppDispatch();
  const onClickAddFlexChild = () => dispatch(addFlexChild());
  const onClickReomveFlexChild = () => dispatch(removeFlexChild());
  return (
    <Wrapper>
      <FlexWrapper
        displayS={flex.display}
        flexDirection={flex.flexDirection}
        justifyContent={flex.justifyContent}
        alignItems={flex.alignItems}
        alignContent={flex.alignContent}
        flexWrap={flex.flexWrap}
      >
        {flexChilds.map((child, i) => {
          return <FlexChild i={i} child={child} />;
        })}
      </FlexWrapper>
      <ButtonWrapper>
        <AddButton onClick={onClickAddFlexChild} />
        <Space />
        <RemoveButton onClick={onClickReomveFlexChild} />
      </ButtonWrapper>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 100%;
`;

const FlexWrapper = styled.div<{
  displayS: string;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  alignContent: string;
  flexWrap: string;
}>`
  width: 100%;
  min-height: 50vh;
  padding: 30px;
  border-radius: 11px;
  background: #75ff7e6c;
  box-shadow: inset 10px 10px 20px #75ff7e4b, inset -10px -10px 20px #75ff7e42;
  display: ${({ displayS }) =>
    typeof displayS === "string" ? displayS : null};
  flex-direction: ${({ flexDirection }) =>
    typeof flexDirection === "string" ? flexDirection : null};
  justify-content: ${({ justifyContent }) =>
    typeof justifyContent === "string" ? justifyContent : null};
  align-items: ${({ alignItems }) =>
    typeof alignItems === "string" ? alignItems : null};
  flex-wrap: ${({ flexWrap }) =>
    typeof flexWrap === "string" ? flexWrap : null};
  align-content: ${({ alignContent }) =>
    typeof alignContent === "string" ? alignContent : null};
  gap: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

const Space = styled.div`
  width: 30px;
`;

export default FlexParent;
