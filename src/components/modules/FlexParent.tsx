import React from "react";
import styled from "styled-components";
import { FlexChild } from "../block/";
import { AddButton, RemoveButton } from "../atoms/";
import { useAppSelector } from "../../hooks/";

const FlexParent = React.memo(() => {
  const flexChilds = useAppSelector((state) => state.count.flexChild);
  const flex = useAppSelector((state) => state.flex);
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
  transition: 1s;
  box-shadow: inset 10px 10px 20px #75ff7e4b, inset -10px -10px 20px #75ff7e42;
  gap: 20px;

  ${({ displayS }) =>
    typeof displayS === "string" &&
    `
  display: ${displayS};
 `}

  ${({ flexDirection }) =>
    typeof flexDirection === "string" &&
    `
  flex-direction: ${flexDirection};
 `}

  ${({ justifyContent }) =>
    typeof justifyContent === "string" &&
    `
  justify-content: ${justifyContent};
 `}

  ${({ alignContent }) =>
    typeof alignContent === "string" &&
    `
  align-content: ${alignContent};
 `}

  ${({ alignItems }) =>
    typeof alignItems === "string" &&
    `
  align-items: ${alignItems};
 `}

  ${({ flexWrap }) =>
    typeof flexWrap === "string" &&
    `
  flex-wrap: ${flexWrap};
 `}
`;

export default FlexParent;
